import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface UseAuthProps {
    middleware?: 'guest' | 'auth';
    redirectIfAuthenticated?: string;
}

interface LoginProps {
    setErrors: (errors: string[]) => void;
    setStatus: (status: string | null) => void;
    [key: string]: any;
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthProps = {}) => {
    const router = useRouter()

    const { data: user, error, mutate } = useSWR('/user', () =>
        axios
            .get('/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                // router.push('/verify-email') // commented out as we don't have verify-email page yet
            }),
        {
            shouldRetryOnError: false
        }
    )

    // const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
        setErrors([])
        setStatus(null)

        try {
            const response = await axios.post('/login', props)
            localStorage.setItem('token', response.data.token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
            await mutate()
            router.push('/dashboard')
        } catch (error: any) {
            if (error.response.status !== 422) throw error
            setErrors(Object.values(error.response.data.errors).flat() as string[])
        }
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => mutate())
        }
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        window.location.pathname = '/login'
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error, middleware, redirectIfAuthenticated, router])

    return {
        user,
        login,
        logout,
    }
}

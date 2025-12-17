'use client';

import { motion } from "framer-motion";
import { LogIn, Lock, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function LoginPage() {
    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        await login({
            email,
            password,
            setErrors,
            setStatus,
        }).finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 w-full max-w-md px-4"
            >
                <Card className="glass-card border-white/10">
                    <CardHeader className="text-center space-y-2">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="mx-auto w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md border border-white/20">
                                <LogIn className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Welcome Back
                            </CardTitle>
                            <CardDescription className="text-gray-400">
                                Enter your credentials to access the dashboard
                            </CardDescription>
                        </motion.div>
                    </CardHeader>
                    <form onSubmit={submitForm}>
                        <CardContent className="space-y-4">
                            {/* Error Messages */}
                            {errors.length > 0 && (
                                <div className="bg-red-500/10 text-red-500 text-sm p-3 rounded-md border border-red-500/20">
                                    {errors.map((error, index) => (
                                        <p key={index}>{error}</p>
                                    ))}
                                </div>
                            )}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-2"
                            >
                                <div className="relative group">
                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="name@example.com"
                                        className="pl-10 bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-gray-500"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-2"
                            >
                                <div className="relative group">
                                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Enter your password"
                                        className="pl-10 bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-gray-500"
                                    />
                                </div>
                            </motion.div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-full"
                            >
                                <Button disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg border-0">
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign In'}
                                </Button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-center"
                            >
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Forgot your password?
                                </a>
                            </motion.div>
                        </CardFooter>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
}

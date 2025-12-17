import axios from 'axios';

// Default to localhost:8000 for Laravel local dev
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true, // Critical for Sanctum SPA Auth
    withXSRFToken: true
});

export default api;

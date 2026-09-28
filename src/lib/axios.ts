import axios from 'axios';

export const api = axios.create({
    baseURL : 'http://localhost:8080/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
api.interceptors.request.use(config => {
    // You can modify the request config here if needed
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }else{
        console.log('No token found in localStorage');
    }
    return config;
});
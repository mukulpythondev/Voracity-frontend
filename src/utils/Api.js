
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://api.example.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization header with JWT token from cookies
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token'); // Get token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

// import axios from 'axios';

// export const axiosInstance = axios.create({

//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
// })
//https://bookmyshow1-342l.onrender.com/
import axios from 'axios';

// 1. Detect if the app is running locally or on Render
const isProduction = window.location.hostname !== 'localhost';

export const axiosInstance = axios.create({
    // Explicitly points to your production URL on Render or defaults to your local setup
    baseURL: isProduction
        ? "https://bookmyshow1-342l.onrender.com"
        : "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json'
    }
});

// 2. FIXED: Dynamically inject the token for every single request lifecycle action
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
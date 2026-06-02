import axios from 'axios';

export const axiosInstance = axios.create({

    baseURL: "/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})


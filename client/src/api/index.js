import axios from 'axios';

export const axiosInstance = axios.create({

    baseURL: "https://bookmyshow1-342l.onrender.com",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})


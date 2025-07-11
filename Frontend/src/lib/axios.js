import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:"https://chat-web-app-ixqn.onrender.com",
    withCredentials: true,
})

import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

export const fetcher = (url: string) =>
    apiClient.get(url).then((res) => res.data);

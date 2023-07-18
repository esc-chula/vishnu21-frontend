import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

export default apiClient;

export const fetcher = (url: string, token: string) =>
    apiClient
        .get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => res.data)
        .catch((err) => {
            throw err.response.data;
        });

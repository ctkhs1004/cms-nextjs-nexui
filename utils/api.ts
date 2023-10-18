import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { RequestParams } from '@/types/index'

const client: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    timeout: 50000, // 50 seconds
});

client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.data && error.response.data.message) {
            alert(error.response.data.message);
        } else {
            alert('システムエラー！');
        }
        return Promise.reject(error);
    }
);

export const getApi = async (url: string, param?: RequestParams): Promise<any> => {
    try {
        const res: AxiosResponse = await client.get(url);
        return res.data;
    } catch (error: any) {
        // Since the interceptor already handles the error, you can simply re-throw it here.
        throw error;
    }
};

export const postApi = async (url: string, data?: any, params?: RequestParams): Promise<any> => {
    try {
        const res: AxiosResponse = await client.post(url, data, { params });
        return res.data;
    } catch (error: any) {
        throw error;
    }
};

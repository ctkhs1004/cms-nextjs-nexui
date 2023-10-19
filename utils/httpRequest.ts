import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { RequestParams, UserData } from '@/types/index'
import { toast } from 'react-hot-toast';

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
            toast.error(error.response.data.message);
        } else {
            toast.error('システムエラー！');
        }
        return Promise.reject(error);
    }
);

export const getApi = async (url: string, param?: RequestParams): Promise<any> => {
    try {
        const res: AxiosResponse = await client.get(url);
        return res.data;
    } catch (error: any) {
        throw error;
    }
};

export const getUserApi = async (url: string, param?: RequestParams): Promise<any> => {
    try {
        const res: AxiosResponse = await client.get(url);
        return res.data;
    } catch (error: any) {
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

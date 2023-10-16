import axios, {AxiosInstance, AxiosResponse} from 'axios';

const client: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {'Content-Type': 'application/json'},
    responseType: 'json',
    timeout: 50000, // milliseconds
});

export const getApi = async (url: string, param?: string): Promise<any> => {
    try {
        const res: AxiosResponse = await client.get(url);
        console.log(res);
        return res.data;
    } catch (error: any) {
        if (error.response.data.code == '') {
            alert(error.response.data.message)
        } else {

        }
    }
};

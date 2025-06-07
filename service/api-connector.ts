import { getStoredData } from '@/utils/asyncStorage';
import axios, { AxiosRequestHeaders, AxiosResponse, Method } from 'axios';

export const axiosInstance = axios.create();
export const apiConnector = (
    method: Method,
    url: string,
    data?: any,
    headers?: AxiosRequestHeaders,
    params?: Record<string, any>
): Promise<AxiosResponse> => {
    return axiosInstance({
        method,
        url,
        data: data ?? null,
        headers,
        params: params ?? null,
    })
}

axiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const token = await getStoredData('auth-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
                console.log("axios interceptor", token)
            }
        } catch (error) {
            console.log("Error getting access token from the storage", error);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
import { getStoredData, StoreData } from '@/utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestHeaders, AxiosResponse, Method } from 'axios';
import { useRouter } from 'expo-router';
import { authEndpoints } from './apis';
import { RefreshToken } from './operations/auth-api';

const router = useRouter();

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
                // console.log("axios interceptor", token)
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

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log("GOING IN INTERCEPTOR OF RESPONSE")

        const originalReq = error.config;
        const isRefershCall = originalReq.url?.endsWith(authEndpoints.REFRESH_TOKEN_API) ||
            originalReq.url === authEndpoints.REFRESH_TOKEN_API;

        if (isRefershCall) {
            return Promise.reject(error);
        }

        if (error?.response?.status === 401 && !originalReq._retry) {
            originalReq._retry = true;

            try {
                console.log("CALLING REFRESH TOKEN")
                const authToken = await RefreshToken()
                console.log("REFRESH TOKEN CALLED")
                await StoreData('auth-token', authToken);

                axiosInstance.defaults.headers['Authorization'] = `Bearer ${authToken}`
                originalReq.headers['Authorization'] = `Bearer ${authToken}`

                return axiosInstance(originalReq);
            } catch (refreshError) {
                console.log("REFRESH TOKEN FAILED")
                await AsyncStorage.clear();
                router.replace("/sign-in")
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)
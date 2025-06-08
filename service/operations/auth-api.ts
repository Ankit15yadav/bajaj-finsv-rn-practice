import { getStoredData, StoreData } from "@/utils/asyncStorage";
import { getOtp } from "@/utils/verify-otp";
import axios from "axios";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { apiConnector } from "../api-connector";
import { authEndpoints } from "../apis";

const {
    LOGIN_API,
    REFRESH_TOKEN_API,
    RESEND_OTP_API,
} = authEndpoints

const router = useRouter();

export async function save(key: string, value: string) {
    console.log("OTP UPDATED");
    await SecureStore.setItemAsync(key, value);
}

export async function Login(phoneNumber: string) {
    try {
        await StoreData('phoneNumber', phoneNumber);
        const response = await apiConnector(
            'POST',
            LOGIN_API,
            { phoneNumber },
        )

        const { authToken, message, success, hashedOTP, firstTimeLogin } = response?.data;

        if (response.status != 200) {
            throw new Error("ERROR WHILE VALIDATING API RESPONSE")
        }

        await save('otp', hashedOTP);
        await StoreData("auth-token", authToken);
        router.replace("/otp-verification");

    } catch (error) {
        console.log(error);
        throw new Error("ERROR WHILE LOGGING IN THE USER")
    }
}

export async function ResendOtp(phoneNumber: string) {
    try {

        const response = await apiConnector(
            'POST',
            RESEND_OTP_API,
            { phoneNumber },
        )

        if (response.status != 200) throw new Error("FAILED TO RESEND OTP");

        const { hashedOTP } = response.data;
        await save('otp', hashedOTP);
        const updatedOtp = await getOtp('otp');

        return updatedOtp;

    } catch (error) {
        console.error(error);
        throw new Error("ERROR WHILE RESENDING THE NEW OTP")
    }
}

export async function RefreshToken() {
    try {
        // passed this phoneNumber p capital that's why getting error from the server
        const phoneNumber = await getStoredData('phoneNumber', "CALLING FROM REFRESH TOKEN");
        // handle the edge case where phoneNumber might not be present the cache storage

        console.log("CONSOLING THE PHONENUMBER FROM REFRESH TOKEN", phoneNumber)

        // if (!phoneNumber) {
        //     // TODO: Force logout and clear all the cache in the asyncStorage of the user
        // }

        const response = await axios.post(
            REFRESH_TOKEN_API,
            { phoneNumber }
        )

        if (response.status !== 200) throw new Error("ERROR GETTING THE AUTHENTICATION TOKEN RESPONSE")

        console.log('REFRESH TOKEN CALLED BY THE INTERCEPTOR')
        const { newAccessToken } = response?.data;
        return newAccessToken;

    } catch (error) {
        console.log(error);
        console.log("ERROR HANDLING THE REFRESH TOKEN OF THE USER");
        // throw new Error("ERROR HANDLING THE REFRESH TOKEN OF THE USER")
    }
}
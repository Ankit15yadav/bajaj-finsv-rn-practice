import * as SecureStore from 'expo-secure-store';


export async function getOtp(key: string) {
    // get otp from secure store
    const otp = await SecureStore.getItemAsync(key);

    // hash the otp to sha256 hash using crypto and check with the stored hash
    return otp
}
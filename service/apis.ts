const BASE_URL = process.env.EXPO_PUBLIC_REACT_NATIVE_BASE_URL!;
console.log(BASE_URL);

export const authEndpoints = {
    LOGIN_API: BASE_URL + "/auth/login",
    RESEND_OTP_API: BASE_URL + "/auth/login/otp/resend",
    REFRESH_TOKEN_API: BASE_URL + "/auth/refresh"
}

export const userDetailsEndPoints = {
    REGISTER_USER: BASE_URL + '/users/profile',
    GET_USER_INFORMATION: BASE_URL + '/user'
}
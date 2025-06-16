import { User, UserInitialInformation } from "@/types/types";
import { StoreData } from "@/utils/asyncStorage";
import { router } from "expo-router";
import { apiConnector } from "../api-connector";
import { userDetailsEndPoints } from "../apis";

const {
    REGISTER_USER,
    GET_USER_INFORMATION
} = userDetailsEndPoints

export async function RegisterUserForFirst(formData: UserInitialInformation) {
    try {

        console.log("api called")
        const response = await apiConnector(
            'PATCH',
            REGISTER_USER,
            { formData }
        )

        if (response.status !== 200) {
            throw new Error("ERROR WHILE ADDING USER DETAILS")
        }

        // IF REGISTERED RETURN
        await StoreData('isVerified', true)
        router.replace('/home')
        return;

    } catch (error) {
        console.log(error);
        throw new Error('ERROR WHILE VALIDATING REGISTER USER API')
    }
}

export async function getUserDetails() {

    try {
        const response = await apiConnector(
            'GET',
            GET_USER_INFORMATION,
        )

        if (response?.status !== 200) {
            throw new Error("ERROR GETTING USER DETAILS")
        }

        const { user } = response?.data;

        return user as User;

    } catch (error) {
        console.log('ERROR WHILE FETCHING USER INFORMATION')
    }
}
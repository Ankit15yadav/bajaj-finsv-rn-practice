import { UserInitialInformation } from "@/types/types";
import { StoreData } from "@/utils/asyncStorage";
import { router } from "expo-router";
import { apiConnector } from "../api-connector";
import { userDetailsEndPoints } from "../apis";

const {
    REGISTER_USER
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
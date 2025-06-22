import { GetDoctorsParams } from "@/types/types";
import { apiConnector } from "../api-connector";
import { DoctorsDetailsEndPoints } from "../apis";

const {
    GET_DOCTOR_DETAILS
} = DoctorsDetailsEndPoints

export async function GetDoctorsDetails(queryParams: GetDoctorsParams) {
    try {
        // console.log(queryParams)
        const response = await apiConnector(
            'GET',
            GET_DOCTOR_DETAILS,
            undefined,
            undefined,
            queryParams
        )

        if (response?.status !== 200) {
            throw new Error("ERROR WHILE FETCHING THE DOCTOR'S DETAILS")
        }

        const { data } = response?.data;

        return data

    } catch (error) {
        console.log(error)
        throw new Error("ERROR WHILE VALIDATING REQUEST")
    }
}
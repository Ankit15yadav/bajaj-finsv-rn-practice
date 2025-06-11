import { RelativePathString } from "expo-router"

export interface UserInitialInformation {
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    gender: 'male' | 'female' | 'other' | string
}

export interface DoctorCardsHomepage {
    id: string,
    icon: string
    onPress: RelativePathString
}
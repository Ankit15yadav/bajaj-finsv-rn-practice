export interface UserInitialInformation {
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    gender: 'male' | 'female' | 'other' | string
}
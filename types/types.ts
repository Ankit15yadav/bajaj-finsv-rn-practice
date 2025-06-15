import { RelativePathString } from "expo-router";

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

export interface DoctorSepcialitiesCard {
    id: string;
    title: string;
    numberOfDocs: number;
    icon: string;
    onPress: RelativePathString;
}


export interface CardData {
    id: number,
    title: string,
    icon: String
    off: boolean
    offValue: number
}

export interface LoginInterface {
    phoneNumber: string,
    Terms: boolean,
    notifications: boolean,
}


export interface DrawerChild {
    id: number,
    title: string,
    children: {
        id: number,
        title: string,
        Icon: string,
        new: boolean
    }[]
}
export interface tabs {
    id: number
    name: string
    title: string
    iconName: string
}

export interface SymptomsCardTypes {
    id: string,
    icon: string,
    title: string,
    onPress: RelativePathString
}

export interface ILabTest {
    id: string,
    icon: string,
    title: string,
    onPress: RelativePathString
}

export interface ITopHospitals {
    id: number,
    image: string,
    logo: string,
    name: string
}

export interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    isStreaming?: boolean;
}

export interface ChatState {
    messages: Message[];
    isGenerating: boolean;
    connectionStatus: 'connected' | 'disconnected' | 'connecting';
}
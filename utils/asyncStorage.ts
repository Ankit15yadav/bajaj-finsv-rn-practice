import AsyncStorage from "@react-native-async-storage/async-storage";

export async function StoreData(key: string, value: string | boolean) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        console.log(`${key} added successfully`);
    } catch (error) {
        console.log(`Error while storing ${key}:`, error);
    }
}

export async function getStoredData<T extends string | boolean>(key: string, message?: string): Promise<T | null> {
    try {
        const rawValue = await AsyncStorage.getItem(key);
        if (rawValue === null) return null;

        const parsedValue = JSON.parse(rawValue);
        // console.log(`${key} FETCHED SUCCESSFULLY${message ? `: ${message}` : ""}`);
        // console.log(parsedValue as T)
        return parsedValue as T;
    } catch (error) {
        console.log(`Error while fetching ${key}:`, error);
        return null;
    }
}

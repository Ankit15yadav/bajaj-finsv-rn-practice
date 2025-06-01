import AsyncStorage from "@react-native-async-storage/async-storage";

export async function StoreData(key: string, value: string) {

    await AsyncStorage.setItem(key, value).then(() => {
        console.log("phone number added successfully")
    }).catch(() => {
        console.log("Error while storing phone number")
    });
}

// it is expecting string or null at the frontend
export async function getStoredData(key: string) {
    return await AsyncStorage.getItem(key).then((data) => {
        console.log("Data fetched Successfully from stored Data")
        return data;
    }).catch(() => {
        console.log("Error while fetching from storedData")
        return null
    });
}
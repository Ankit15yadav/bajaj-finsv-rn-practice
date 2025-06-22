import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const HealthPay = () => {

    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [city, setCity] = useState<string | null>(null)
    const [result, setResult] = useState<any>();
    const [addressOfUser, setAddress] = useState<Location.LocationGeocodedAddress | null>(null)


    async function getAddress(address: string) {

        // Location.LocationAccuracy

        try {

            const result = await Location.geocodeAsync(address);

            if (result.length == 0) {
                setResult("No matching location found")
            }

            setResult(result)


        } catch (error) {
            console.log(error)
        }
    }

    async function getAddressFromCords() {
        const coords: Location.LocationGeocodedLocation = {
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!,
        }

        const address = await Location.reverseGeocodeAsync(coords)

        // console.log(address);
        setAddress(address[0])
        console.log(addressOfUser)
    }

    const handleLocationInformation = () => {

        // getCoordinatesFromAddress(city!)
        getAddressFromCords();

        // console.log(result)
    }


    useEffect(() => {
        async function getCurrentLocation() {

            let response = await Location.requestForegroundPermissionsAsync();
            // Location.useBackgroundPermissions()

            if (response.status !== 'granted') {
                setErrorMsg("Permission to access location was denied")
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced
            });
            setLocation(location);
        }

        getCurrentLocation()

    }, [])

    let text = 'waiting....'
    if (errorMsg) {
        text = errorMsg;
    }
    else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View className=' flex flex-col gap-3 min-h-48 items-center justify-center'>
            <Text>
                expo location testing
            </Text>

            <Text className='flex items-center'>
                {
                    location?.coords?.latitude
                }
            </Text>

            <TextInput
                placeholder='enter name of any place'
                className='min-w-72 h-12 p-3 border rounded-xl'
                value={city!}
                onChangeText={setCity}
            />
            <Pressable className='bg-bajaj px-6 py-2 rounded-xl'
                onPress={handleLocationInformation}
            >
                <Text className='text-white'>
                    Submit
                </Text>
            </Pressable>

            {
                addressOfUser
                &&
                (
                    <View className='flex flex-col'>
                        <Text> {addressOfUser?.city} </Text>
                        <Text> {addressOfUser?.street ?? 'kala kua'} </Text>
                        <Text> {addressOfUser?.postalCode} </Text>
                        <Text> {addressOfUser?.region} </Text>
                        <Text> {addressOfUser?.country} </Text>
                    </View>
                )
            }
        </View>
    )
}

export default HealthPay
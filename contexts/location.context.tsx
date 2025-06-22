import * as Location from 'expo-location'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

interface LocationProps {
    children?: React.ReactNode
}

interface LocationContext {
    location: Location.LocationObject | null
    errorMsg: string | null
    addressOfUser: Location.LocationGeocodedAddress | null
}

const LocationContext = createContext<LocationContext | null>(null)

export const useLocation = () => {

    const state = useContext(LocationContext)

    if (!state) {
        throw new Error("NO CONTEXT OF LOCATION PRESENT")
    }
    return state
}


const LocationProvider: React.FC<LocationProps> = ({ children }) => {

    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [addressOfUser, setAddressOfuser] = useState<Location.LocationGeocodedAddress | null>(null)

    const getCurrentLocation = useCallback(async () => {
        let respose = await Location.requestForegroundPermissionsAsync()

        if (respose?.status !== 'granted') {
            setErrorMsg("Permission to access location was denied")
        }

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced
        })
        setLocation(location)
    }, [])

    const getUsersAddress = useCallback(async () => {
        const coords: Location.LocationGeocodedLocation = {
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!
        }

        const address = await Location.reverseGeocodeAsync(coords)

        setAddressOfuser(address[0]);
        console.log(address[0])
    }, [location])


    useEffect(() => {
        getCurrentLocation()
    }, [])

    useEffect(() => {
        if (location)
            getUsersAddress()
    }, [location])

    const locationContextValue = useMemo(() => ({
        location,
        errorMsg,
        addressOfUser
    }), [location, errorMsg, addressOfUser])

    return (
        <LocationContext.Provider value={locationContextValue} >
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider

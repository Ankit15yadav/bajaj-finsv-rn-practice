import LocationModal from '@/components/location/location-moda'
import * as Location from 'expo-location'
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

interface LocationProps {
    children?: React.ReactNode
}

interface LocationContext {
    location: Location.LocationObject | null
    errorMsg: string | null
    addressOfUser: Location.LocationGeocodedAddress | null
    setShowLocationModal: React.Dispatch<React.SetStateAction<boolean>>
    showLocationModal: boolean | false
    refreshLocation: () => void
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
    const [showLocationModal, setShowLocationModal] = useState<boolean>(false);

    const getCurrentLocation = useCallback(async () => {
        console.log('current location called')
        let respose = await Location.requestForegroundPermissionsAsync()

        if (respose?.status !== 'granted') {
            setErrorMsg("Permission to access location was denied")
            return;
        }

        console.log('got current location')
        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced
        })
        setLocation(location)
        setErrorMsg('')
    }, [])

    const getUsersAddress = useCallback(async () => {
        const coords: Location.LocationGeocodedLocation = {
            latitude: location?.coords.latitude!,
            longitude: location?.coords.longitude!
        }

        const address = await Location.reverseGeocodeAsync(coords)

        setAddressOfuser(address[0]);
        // console.log(address[0])
    }, [location])

    const refreshLocation = useCallback(async () => {
        await getCurrentLocation();
    }, [getCurrentLocation]);

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
        addressOfUser,
        setShowLocationModal,
        showLocationModal,
        refreshLocation
    }), [location, errorMsg, addressOfUser, setShowLocationModal, showLocationModal, refreshLocation])

    return (
        <LocationContext.Provider value={locationContextValue}>
            {children}

            {showLocationModal && (
                <LocationModal />

            )}
        </LocationContext.Provider>

    )
}

export default LocationProvider

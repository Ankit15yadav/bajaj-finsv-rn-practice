import { getUserDetails } from '@/service/operations/user.apis'
import { User } from '@/types/types'
import { getStoredData, StoreData } from '@/utils/asyncStorage'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface UserProps {
    children?: React.ReactNode
}

interface userContext {
    user: User | undefined
    refreshUser: () => Promise<void>
}

const userContext = createContext<userContext | null>(null)

export const useUser = () => {
    const state = useContext(userContext);

    if (!state) {
        throw new Error("No state present");
    }

    return state
}

const UserProvider: React.FC<UserProps> = ({ children }) => {

    const [user, setUser] = useState<User>();

    const setUserInformation = async () => {

        let user;
        user = await getStoredData<User>('user');

        if (!user) {
            console.log("getting user from api call")
            user = await getUserDetails();
            await StoreData('user', user as User)
            setUser(user);
        }
        else {
            console.log('getting user from stored storage')
            setUser(user as User);
        }
    }

    const refreshUser = async () => {
        await setUserInformation();
    }

    useEffect(() => {
        setUserInformation()
    }, [])

    return (
        <userContext.Provider value={{ user, refreshUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider
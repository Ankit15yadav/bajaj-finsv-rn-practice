import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OtpVerificationPage from '../(auth)/otp-verification'

const Wellsure = () => {
    return (
        <SafeAreaView
            className='w-full min-h-screen bg-white'
        >
            <OtpVerificationPage />

        </SafeAreaView>
    )
}

export default Wellsure
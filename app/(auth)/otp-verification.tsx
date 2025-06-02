import { getStoredData } from '@/utils/asyncStorage';
import { getOtp } from '@/utils/verify-otp';
import bcrypt from 'bcryptjs';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTimer } from "react-timer-hook";
import { save } from './sign-in';

const OtpVerificationPage = () => {

    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [otpInput, setOtpInput] = useState<string>('');
    const [storedOtp, setStoredOtp] = useState<string>('');

    // initial expiry time of the timer
    let expiryTimer = new Date(Date.now() + 6 * 1000)

    const { seconds, restart } = useTimer({
        expiryTimestamp: expiryTimer,
        onExpire: () => {
            console.log("timer finished");
        }
    });

    const handleVerificationOfOtp = () => {

        // compare the otp from the frontend and hashed otp

        console.log(otpInput, storedOtp)

        const hashedOtpOfUser = bcrypt.compareSync(otpInput, storedOtp)

        // console.log(storedOtp)
        if (hashedOtpOfUser) {
            console.log("user is verified")
            router.replace("/home")
        }
        else {
            console.log("otp is not valid")
        }
    }

    const handleResendOtp = async () => {

        console.log("method called")

        const response = await fetch('http://192.168.29.193:4000/api/auth/login/otp/resend', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phoneNumber
            })
        })

        if (!response.ok) {
            throw new Error("Error while resending otp , please try again later")

        }

        const { hashedOTP } = await response.json()

        if (response.ok) {
            await save('otp', hashedOTP)
            getStoredOtp()
        }
    }

    const getStoredOtp = async () => {
        const StoredHashedOtp = await getOtp('otp')
        setStoredOtp(StoredHashedOtp || '');
    }

    const getValue = async () => {
        const result = await getStoredData('phoneNumber');
        setPhoneNumber(result || '');
    }

    useEffect(() => {

        getValue()
        getStoredOtp()

    }, [])

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View className='w-full min-h-screen px-8 bg-light_sky '>
                <View className='mt-8' >
                    <Image
                        source={require("@/assets/images/logo-small.png")}
                        style={{
                            width: 85,
                            height: 50
                        }}
                    />
                </View>

                {/* otp box */}
                <View
                    className='flex flex-col justify-center w-full h-auto bg-white shadow-md rounded-xl p-3 mt-10'
                >
                    <Text
                        className='mt-1 text-lg font-semibold'
                    >
                        Enter OTP
                    </Text>
                    <Text
                        className='text-sm font-medium'
                    >
                        Enter the six-digit verification code that you received on your number
                    </Text>

                    <TextInput
                        className='w-full border  rounded-lg mt-6 p-3 tracking-widest'
                        maxLength={6}
                        keyboardType='numeric'
                        returnKeyType='done'
                        value={otpInput}
                        onChange={e => setOtpInput(e.nativeEvent.text)}
                    />

                    {/* resend otp logic */}
                    <View
                        className='flex-row gap-x-2 mt-3'
                    >
                        <Text
                            className='text-sm font-medium'
                        >
                            OTP sent to +91 {phoneNumber}
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.replace("/sign-in")}
                        >
                            <Text
                                className='text-bajaj text-sm underline font-medium'
                            >
                                Change Number
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        className='flex justify-center items-center mt-5'
                    >
                        <Text
                            className='text-lg font-medium'
                        >
                            {
                                seconds === 0 ? (
                                    <TouchableOpacity
                                        onPress={() => {
                                            handleResendOtp()
                                            restart(new Date(Date.now() + 6 * 1000))
                                            // not passing function like handle() coz this will run immediately 
                                            // when the component runs or renders
                                        }}
                                    >
                                        <Text
                                            className='text-lg font-medium text-bajaj'
                                        >
                                            Resend OTP
                                        </Text>
                                    </TouchableOpacity>
                                ) :
                                    (
                                        <Text>
                                            Resend OTP in {seconds}s
                                        </Text>
                                    )
                            }
                        </Text>
                    </View>

                </View>

                {/* next button */}
                <TouchableOpacity
                    className='mt-6 flex items-center justify-center'
                    onPress={handleVerificationOfOtp}
                >
                    <Text
                        className='w-fit bg-bajaj px-12 py-3 rounded-md text-white'
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>



    )
}

export default OtpVerificationPage
import { getStoredData } from '@/utils/asyncStorage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTimer } from "react-timer-hook";

const OtpVerificationPage = () => {

    const [phoneNumber, setPhoneNumber] = useState<string>('')
    let expiryTimer = new Date(Date.now() + 60 * 1000)

    const { seconds, restart } = useTimer({
        expiryTimestamp: expiryTimer,
        onExpire: () => {
            console.log("timer finished");
        }
    });

    const handleVerificationOfOtp = () => {

    }


    useEffect(() => {

        const getValue = async () => {
            const result = await getStoredData('phoneNumber');
            setPhoneNumber(result || '');
        }

        getValue()

    }, [])

    return (
        <View className='w-full px-8 '>
            <View >
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
                className='flex flex-col justify-center w-full h-auto bg-white shadow-md rounded-xl p-3 mt-2'
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
                        onPress={() => router.back()}
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
                                        restart(new Date(Date.now() + 60 * 1000))
                                    }}
                                >
                                    <Text
                                        className='text-lg font-medium'
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

    )
}

export default OtpVerificationPage
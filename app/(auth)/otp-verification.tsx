import { ResendOtp } from '@/service/operations/auth-api';
import { getStoredData, StoreData } from '@/utils/asyncStorage';
import { getOtp } from '@/utils/verify-otp';
import bcrypt from 'bcryptjs';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTimer } from 'react-timer-hook';


const OtpVerificationPage = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [otpInput, setOtpInput] = useState<string>('');
    const [storedOtp, setStoredOtp] = useState<string>('');

    // Timer setup: 60 seconds expiry
    const expiryTimer = new Date(Date.now() + 60000);
    const { seconds, restart } = useTimer({
        expiryTimestamp: expiryTimer,
        onExpire: () => console.log("Timer expired"),
    });


    const handleVerificationOfOtp = async () => {
        const isNewUser = await getStoredData<boolean>('isNewUser')
        const isOtpCorrect = bcrypt.compareSync(otpInput, storedOtp);
        if (isOtpCorrect) {
            if (isNewUser) {
                router.replace("/personal-information")
                return;
            }
            await StoreData('isVerified', true)
            router.replace('/home');
            return;
        } else {
            console.log("Invalid OTP");
        }
    };

    const handleResendOtp = async () => {
        const updatedOtp = await ResendOtp(phoneNumber)
        setStoredOtp(updatedOtp || '');
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getStoredData<string>('phoneNumber');
            const otp = await getOtp('otp');
            setPhoneNumber(result || '');
            setStoredOtp(otp || '');
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView className="flex-1">
            <View className="w-full min-h-screen px-8 bg-[#B3DAF7]">
                {/* Logo */}
                <View className="mt-8">
                    <Image
                        source={require("@/assets/images/logo-small.png")}
                        className="w-[85px] h-[50px]"
                    />
                </View>

                {/* OTP Card */}
                <View className="mt-10 bg-white p-4 rounded-xl shadow-md">
                    <Text className="text-lg font-semibold mt-1">Enter OTP</Text>
                    <Text className="text-sm font-medium mt-1">
                        Enter the six-digit verification code sent to your number
                    </Text>

                    <TextInput
                        className="w-full border rounded-lg mt-6 p-3 text-center tracking-widest"
                        maxLength={6}
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={otpInput}
                        onChangeText={setOtpInput}
                    />

                    {/* Phone number display + change link */}
                    <View className="flex-row items-center gap-x-2 mt-3">
                        <Text className="text-sm font-medium">
                            OTP sent to +91{phoneNumber}
                        </Text>
                        <TouchableOpacity onPress={() => router.replace('/sign-in')}>
                            <Text className="text-[#004da8] underline text-sm font-medium">
                                Change Number
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Timer + Resend OTP */}
                    <View className="items-center mt-5">
                        {seconds === 0 ? (
                            <TouchableOpacity
                                onPress={() => {
                                    handleResendOtp();
                                    restart(new Date(Date.now() + 6000));
                                }}
                            >
                                <Text className="text-[#004da8] text-lg font-medium">
                                    Resend OTP
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <Text className="text-lg font-medium">
                                Resend OTP in {seconds}s
                            </Text>
                        )}
                    </View>
                </View>

                {/* Next Button */}
                <TouchableOpacity
                    className="mt-6 items-center justify-center"
                    onPress={handleVerificationOfOtp}
                >
                    <Text className="bg-[#004da8] px-12 py-3 rounded-md text-white text-base font-bold">
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default OtpVerificationPage;

import { Login } from '@/service/operations/auth-api';
import { LoginInterface } from '@/types/types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'expo-checkbox';

import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import CountryFlag from "react-native-country-flag";
import { SafeAreaView } from 'react-native-safe-area-context';


const SignIn = () => {

    const [formData, setFormData] = useState<LoginInterface>({
        phoneNumber: '',
        notifications: false,
        Terms: false
    });

    const handleLogin = async () => {
        await Login(formData.phoneNumber);
    };

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-[#B3DAF7] p-4">
                <Image
                    source={require("@/assets/images/logo-small.png")}
                    className="w-[85px] h-[50px]"
                />
                <View className="w-full bg-white mt-8 rounded-xl p-4">
                    <Text className="font-extrabold text-base">
                        Enter your mobile number
                    </Text>
                    <Text className="text-xs font-bold mt-1">
                        We will send a code (via SMS text message) to your mobile number
                    </Text>

                    <View className="mt-9">
                        <View className="flex-row gap-2">
                            <View className="w-[70px] p-3 rounded-lg bg-gray-100 flex-row items-center justify-center gap-1">
                                <CountryFlag isoCode='in' size={12} />
                                <Text className="text-xs font-black">+91</Text>
                            </View>
                            <TextInput
                                value={formData.phoneNumber}
                                onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
                                className={`flex-1 p-3 rounded-lg border-2 ${formData.phoneNumber.length === 10 ? 'border-[#004da8]' : 'border-gray-200'}`}
                                placeholder="0123456789"
                                placeholderTextColor="#e5e7eb"
                                keyboardType="phone-pad"
                                returnKeyType="done"
                                maxLength={10}
                            />
                        </View>
                    </View>

                    {
                        formData.phoneNumber.length > 0 && formData.phoneNumber.length < 10 && (
                            <View className="flex-row mt-4 mb-4 items-center justify-center gap-1 h-5">
                                <Ionicons name='alert-circle-outline' size={20} color="red" />
                                <Text className="text-[10px] text-red-500 font-medium">
                                    Please enter a 10 digit mobile number!
                                </Text>
                            </View>
                        )
                    }

                    {
                        formData.phoneNumber.length === 10 && !formData.Terms && (
                            <View className="flex-row mt-4 mb-4 items-center justify-center gap-1 h-5">
                                <Ionicons name='alert-circle-outline' size={20} color="red" />
                                <Text className="text-[10px] text-red-500 font-medium">
                                    Please accept the Terms and Privacy Policy before proceeding
                                </Text>
                            </View>
                        )
                    }
                </View>

                {/* Terms & Promotions */}
                <View className="flex flex-col gap-3 mt-4 px-2">
                    <View className="flex-row gap-3 items-center">
                        <Checkbox
                            value={formData.Terms}
                            onValueChange={() => setFormData({ ...formData, Terms: !formData.Terms })}
                            color="#004da8"
                            style={{ width: 18, height: 18, borderRadius: 5 }}
                        />
                        <Text className="text-xs">
                            By continuing you agree to our <Text className="font-semibold">Terms & Conditions</Text> & <Text className="font-semibold">Privacy Policy</Text>
                        </Text>
                    </View>

                    <View className="flex-row gap-3 items-center">
                        <Checkbox
                            value={formData.notifications}
                            onValueChange={() => setFormData({ ...formData, notifications: !formData.notifications })}
                            color="#004da8"
                            style={{ width: 18, height: 18, borderRadius: 5 }}
                        />
                        <Text className="text-xs">
                            Receive offers and promotional communications via SMS and WhatsApp
                        </Text>
                    </View>
                </View>

                <View className="flex-row items-center justify-center">
                    <TouchableOpacity
                        disabled={formData.phoneNumber.length < 10 || !formData.Terms}
                        onPress={handleLogin}
                        className={`flex-row items-center justify-center mt-4 w-[150px] py-2 rounded-full 
                            ${formData.phoneNumber.length < 10 || !formData.Terms ? 'bg-[#336ebd]' : 'bg-[#004da8]'}`}
                    >
                        <Text className="text-white font-bold text-base">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignIn;

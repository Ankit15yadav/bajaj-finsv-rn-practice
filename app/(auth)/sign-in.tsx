import { Login } from '@/types/auth';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import CountryFlag from "react-native-country-flag";
import { SafeAreaView } from 'react-native-safe-area-context';


const SignIn = () => {

    const [formData, setFormData] = useState<Login>({
        phoneNumber: '',
        notifications: false,
        Terms: false
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View
                style={{
                    flex: 1,
                    backgroundColor: "#B3DAF7",
                    padding: 15
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
            >
                <View>
                    <Image
                        source={require("@/assets/images/logo-small.png")}
                        style={{
                            width: 85,
                            height: 50
                        }}
                    />
                </View>
                <View
                    style={{
                        width: 'auto',
                        height: 'auto',
                        backgroundColor: "white",
                        marginTop: 30,
                        borderRadius: 15,
                        padding: 15,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '800',
                            paddingTop: 5,
                            fontSize: 15
                        }}
                    >
                        Enter your mobile number
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '700',
                            marginTop: 2
                        }}
                    >
                        We will send a code (via SMS text message) to your mobile number
                    </Text>

                    {/* phone number text input */}
                    <View
                        style={{
                            marginTop: 35
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 5,
                            }}
                        >
                            <View
                                style={{
                                    width: 70,
                                    padding: 15,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    gap: 4,
                                    backgroundColor: '#f3f4f6',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <CountryFlag isoCode='in' size={12} />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '700'
                                    }}
                                >
                                    +91
                                </Text>
                            </View>
                            <TextInput
                                value={formData.phoneNumber}
                                onChangeText={(text) => setFormData({
                                    ...formData,
                                    phoneNumber: text
                                })}
                                style={{
                                    borderWidth: 2,
                                    borderColor: '#e5e7eb',
                                    flex: 1,
                                    padding: 15,
                                    borderRadius: 10
                                }}
                                placeholder='0123456789'
                                placeholderTextColor={'#e5e7eb'}
                                keyboardType='phone-pad'
                                returnKeyType='done'
                                maxLength={10}
                            />
                        </View>
                    </View>
                    <Pressable
                        onPress={() => router.replace('/home')}
                    >
                        <Text>
                            home
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default SignIn

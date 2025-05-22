import { Login } from '@/types/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import CountryFlag from "react-native-country-flag";
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {

    const [formData, setFormData] = useState<Login>({
        phoneNumber: '',
        notifications: false,
        Terms: false
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View>
                    <Image
                        source={require("@/assets/images/logo-small.png")}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.heading}>
                        Enter your mobile number
                    </Text>
                    <Text style={styles.subHeading}>
                        We will send a code (via SMS text message) to your mobile number
                    </Text>

                    <View style={styles.inputGroup}>
                        <View style={styles.phoneRow}>
                            <View style={styles.countryCodeBox}>
                                <CountryFlag isoCode='in' size={12} />
                                <Text style={styles.countryCodeText}>+91</Text>
                            </View>
                            <TextInput
                                value={formData.phoneNumber}
                                onChangeText={(text) => setFormData({
                                    ...formData,
                                    phoneNumber: text
                                })}
                                style={[styles.phoneInput, {
                                    borderColor: formData.phoneNumber.length === 10 ? '#004da8' : '#e5e7eb'
                                }]}
                                placeholder='0123456789'
                                placeholderTextColor={'#e5e7eb'}
                                keyboardType='phone-pad'
                                returnKeyType='done'
                                maxLength={10}
                            />
                        </View>
                    </View>

                    {
                        formData.phoneNumber.length > 0 && formData.phoneNumber.length < 10 && (
                            <View style={styles.warningBox}>
                                <Ionicons name='alert-circle-outline' size={20} style={styles.warningIcon} />
                                <Text style={styles.warningText}>
                                    Please enter a 10 digit mobile number !
                                </Text>
                            </View>
                        )
                    }
                    {
                        formData.phoneNumber.length === 10 && !formData.Terms &&
                        (
                            <View style={styles.warningBox}>
                                <Ionicons name='alert-circle-outline' size={20} style={styles.warningIcon} />
                                <Text style={styles.warningText}>
                                    Please accept the Terms and Privacy Policy before proceeding
                                </Text>
                            </View>
                        )
                    }
                </View>

                {/* <Pressable onPress={() => router.replace('/home')}>
                    <Text>home</Text>
                </Pressable> */}

                {/* Terms and conditions */}
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        marginTop: 10,
                        padding: 10
                    }}
                >
                    {/* check box 1 */}
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 20,
                            alignItems: "center",
                        }}
                    >
                        <Checkbox
                            value={formData.Terms}
                            onValueChange={() => setFormData({
                                ...formData,
                                Terms: !formData.Terms
                            })}
                            color={'#004da8'}
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 5
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            By continuing you agree to our
                            <Text>Terms & Conditions</Text> & <Text>Privacy Policy</Text>
                        </Text>

                    </View>

                    {/* check box 2 */}
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 20,
                            alignItems: "center",
                        }}
                    >
                        <Checkbox
                            value={formData.notifications}
                            onValueChange={() => setFormData({
                                ...formData,
                                notifications: !formData.notifications
                            })}
                            color={'#004da8'}
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 5
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 12,
                            }}
                        >
                            Receive offers and promotional communications for
                            potential offerings via SMS and Whatsapp
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 15,
                            width: 150,
                            padding: 10,
                            borderRadius: 100,
                            backgroundColor: (formData.phoneNumber.length < 10 || !formData.Terms) ? "#336ebd" : "#004da8"
                        }}
                        disabled={formData.phoneNumber.length < 10 || !formData.Terms}
                        onPress={() => router.push("/home")}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '700',
                                color: 'white'
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#B3DAF7",
        padding: 15,
    },
    logo: {
        width: 85,
        height: 50
    },
    formContainer: {
        width: 'auto',
        height: 'auto',
        backgroundColor: "white",
        marginTop: 30,
        borderRadius: 15,
        padding: 15
    },
    heading: {
        fontWeight: '800',
        paddingTop: 5,
        fontSize: 15
    },
    subHeading: {
        fontSize: 12,
        fontWeight: '700',
        marginTop: 4
    },
    inputGroup: {
        marginTop: 35
    },
    phoneRow: {
        flexDirection: 'row',
        gap: 5
    },
    countryCodeBox: {
        width: 70,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        gap: 4,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    countryCodeText: {
        fontSize: 13,
        fontWeight: '900'
    },
    phoneInput: {
        borderWidth: 2,
        flex: 1,
        padding: 15,
        borderRadius: 10
    },
    warningBox: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: "center",
        gap: 5,
        height: 20
    },
    warningIcon: {
        fontSize: 15,
        color: 'red',
        fontWeight: '700'
    },
    warningText: {
        fontSize: 10,
        color: 'red',
        fontWeight: '500'
    }
});

export default SignIn;

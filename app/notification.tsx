import { getOtp } from '@/utils/verify-otp';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';



const NotificationPage = () => {

    const [storredOtp, setStoredOtp] = useState<string | null>(null);
    const [otpInput, setOtpInput] = useState<string | undefined>(undefined);
    const [verified, isVerified] = useState<boolean>(false);

    useEffect(() => {
        const getStoredOtp = async () => {
            const StoredHashedOtp = await getOtp('otp')
            setStoredOtp(StoredHashedOtp);
        }

        getStoredOtp()
    }, [])

    const handleSubmit = () => {

        // convert the otpInput into hash
        // const hashedOtp = bcrypt.hashSync(otpInput!, 3);

        if (otpInput === storredOtp) {
            isVerified(true)
        }
        else isVerified(false);
    }

    return (
        <View>
            <Text>
                <TextInput
                    style={{
                        borderRadius: 2,
                        width: 100,
                        height: 100,
                        borderColor: 'black',
                    }}
                    placeholder='Enter otp'
                    placeholderTextColor={'gray'}
                    value={otpInput}
                    keyboardType='number-pad'
                    returnKeyType='done'
                    maxLength={6}
                    onChange={e => setOtpInput(e.nativeEvent.text)}
                />

                <TouchableOpacity
                    onPress={handleSubmit}
                >
                    <Text
                        className='text-lg w-fit px-4 bg-purple-200 rounded-md'
                    >
                        Submit
                    </Text>
                </TouchableOpacity>

                {
                    verified ? (<Text>
                        user is verified
                    </Text>) : (<Text>
                        user is Unverified
                    </Text>)
                }
            </Text>

        </View>
    )
}

export default NotificationPage
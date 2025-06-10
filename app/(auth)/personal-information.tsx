import { RegisterUserForFirst } from '@/service/operations/user.apis'
import { UserInitialInformation } from '@/types/types'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const PersonalInformationOfUserAfterFirstLogin = () => {

    const [formData, setFormData] = useState<UserInitialInformation>({
        firstName: '',
        lastName: '',
        gender: '',
    })

    const Genders = ['Male', 'Female', 'Other']

    const handleTextInsertion = (field: keyof UserInitialInformation) => (value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    const handleGenderSelection = (gender: string) => {
        const selectedGender = gender.toLowerCase();
        setFormData((prev) =>
            ({ ...prev, gender: selectedGender })
        );
    }

    const handleSubmit = async () => {
        await RegisterUserForFirst(formData)
    }

    return (
        <SafeAreaView className='flex-1 bg-white p-5'
        >
            <ScrollView className='flex-1 flex-col'>
                <View className='pt-8 px-2'>
                    <Image
                        source={require("@/assets/images/logo-small.png")}
                        className="w-[100px] h-[50px]"
                    />
                </View>

                {/* personal details View container */}
                <View className='w-full h-auto rounded-xl mt-6 px-4 py-3'
                    style={styles.shadowStyle}
                >
                    {/* upper headings */}
                    <View className='flex flex-col justify-center items-center py-3 gap-1'>
                        <Text className='text-lg font-semibold text-gray-700'>
                            Complete Your Profile
                        </Text>
                        <Text className='flex text-center text-sm text-gray-700'>
                            Please provide your details to complete the signup process
                        </Text>
                    </View>

                    {/* details form */}
                    <View className="flex flex-col gap-3">

                        {/* first name */}
                        <View>
                            <Text className="mb-1 text-lg font-medium text-gray-700">First Name</Text>
                            <TextInput className="border-2 border-gray-400 rounded-xl h-12 p-3"
                                placeholder='Ankit'
                                placeholderTextColor={'gray'}
                                value={formData.firstName ?? ''}
                                onChangeText={handleTextInsertion('firstName')}
                            />
                        </View>

                        {/* last name */}
                        <View>
                            <Text className="mb-1 text-lg font-medium text-gray-700">Last Name</Text>
                            <TextInput className="border-2 border-gray-400 rounded-xl h-12 p-3"
                                placeholder='Yadav'
                                placeholderTextColor={'gray'}
                                value={formData.lastName ?? ''}
                                onChangeText={handleTextInsertion('lastName')}
                            />
                        </View>

                        {/* gender  */}
                        <View>
                            <Text className="mb-1 text-lg font-medium text-gray-700">Gender</Text>
                            <View className='flex flex-row justify-between items-center'
                            >
                                {
                                    // rendering the gender selection button
                                    Genders.map((gender, index) => (
                                        <Pressable key={index}
                                            className={`flex items-center justify-center w-28 h-12 rounded-xl
                                            ${formData.gender === gender.toLocaleLowerCase() ? 'bg-bajaj ' : 'bg-gray-200'}`}
                                            onPress={() => handleGenderSelection(gender)}
                                        >
                                            <Text className={`${formData.gender === gender.toLocaleLowerCase() ? 'text-white ' : 'text-gray-700'} font-semibold`}>
                                                {gender}
                                            </Text>
                                        </Pressable>
                                    ))
                                }
                            </View>

                        </View>
                    </View>

                    {/* submit button view container */}
                    <View className='flex items-center justify-center mt-16 mb-6'
                    >
                        <TouchableOpacity className={`w-fit  px-5 py-3 rounded-xl bg-bajaj
                        ${(!formData.firstName || !formData.lastName || !formData.gender) ? 'bg-bajaj-100' : ''}`}
                            onPress={handleSubmit}
                            disabled={!formData.firstName || !formData.lastName || !formData.gender}
                        >
                            <Text className=' text-white'>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalInformationOfUserAfterFirstLogin


const styles = StyleSheet.create({
    shadowStyle: {
        backgroundColor: '#ffffff',

        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 4,

        // Android shadow
        elevation: 3,
    },
});
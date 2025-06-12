import React from 'react'
import { Text, View } from 'react-native'
import OnlineIndicator from '../online-indicator'

const ConsultDoctorsSection = () => {
    return (
        <View className='mt-2'>
            {/* header section */}
            <View className='flex flex-row items-center justify-between'>
                <Text className='text-center text-2xl font-bold tracking-wide'> Consult Instantly</Text>
                <View className='
                flex flex-row items-center gap-2
                text-center bg-gray-300 px-3 py-1 rounded-lg'>
                    <Text className='text-lg font-bold'>
                        200+ Doctors
                    </Text>
                    <OnlineIndicator />
                </View>
            </View>

            {/* specialities section */}
            <View>
                {/* TODO */}
            </View>
        </View>
    )
}

export default ConsultDoctorsSection
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import TopHospitalsFlatList from './flat-lists/top-hospitals'

const TopHospitalsComponent = () => {
    return (
        <View className='flex flex-col mt-8'>
            <View className='flex flex-col gap-y-4'>
                <Text className='text-2xl font-bold'>Top Hospitals</Text>
                <Text className='text-sm font-medium text-gray-500'>Access 6500+ top hospitals across India</Text>
            </View>

            {/* view all section */}
            <View className='flex flex-row justify-between items-center mt-5'>
                <Text className='text-xl font-bold'>Featured Hospitals</Text>
                {/* TODO : router push to all tests*/}
                <TouchableOpacity>
                    <Text className='font-bold text-bajaj text-xl'>View All</Text>
                </TouchableOpacity>
            </View>

            <View className='flex flex-row mt-3'>
                <TopHospitalsFlatList />
            </View>

        </View>
    )
}

export default TopHospitalsComponent
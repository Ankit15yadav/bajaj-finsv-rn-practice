import { LabTestData } from '@/Data/home-page'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LabTestsCard from './card/labtests.card'

const LabTests = () => {
    return (
        <View className='flex flex-col '>

            {/* headings of lab test section */}
            <View className='flex flex-col gap-y-4'>
                <Text className='text-2xl font-bold'>Lab Tests</Text>
                <Text className='text-sm font-medium text-gray-500'>Get best deals on tests across 1000+ labs</Text>
            </View>

            {/* view all section */}
            <View className='flex flex-row justify-between items-center mt-5'>
                <Text className='text-xl font-bold'>Book Blood Tests and Scans</Text>
                {/* TODO : router push to all tests*/}
                <TouchableOpacity>
                    <Text className='font-bold text-bajaj text-xl'>View All</Text>
                </TouchableOpacity>
            </View>

            {/* lab tests card section */}
            <View className='flex flex-row justify-between flex-wrap gap-y-6 mt-4 mb-4'>
                {
                    LabTestData.map((test) => (
                        <LabTestsCard key={test.id} id={test.id} icon={test.icon} onPress={test.onPress} title={test.title} />
                    ))
                }
            </View>

        </View>
    )
}

export default LabTests
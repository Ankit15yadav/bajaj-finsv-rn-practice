import { SelectSymptomsData } from '@/Data/home-page'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SymptomsCard from './card/symptoms-card'

const SelectSymptoms = () => {
    return (
        <View className='flex flex-col gap-y-4 mb-4'>
            {/* view all button section */}
            <View className='flex flex-row justify-between items-center'>
                <Text className='text-xl font-bold'>Select Symptoms</Text>
                {/* TODO : router push to All symptoms */}
                <TouchableOpacity>
                    <Text className='font-bold text-bajaj text-xl'>View All</Text>
                </TouchableOpacity>
            </View>

            {/* symptoms  card */}
            <View className='flex flex-row justify-between flex-wrap gap-y-6 mt-2'>
                {
                    SelectSymptomsData.map((symptom) => (
                        <SymptomsCard key={symptom.id} title={symptom.title} icon={symptom.icon} id={symptom.id} onPress={symptom.onPress} />
                    ))
                }
            </View>

        </View>
    )
}

export default SelectSymptoms
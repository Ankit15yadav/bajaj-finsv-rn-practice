import { TopHospitalDataImageMap, TopHospitalsData } from '@/Data/flatLists.data'
import React from 'react'
import { FlatList, Image, Pressable, Text } from 'react-native'

const TopHospitalsFlatList = () => {
    return (
        <FlatList
            className='mt-4'
            data={TopHospitalsData}
            horizontal
            renderItem={({ item }) => (
                <Pressable className='flex flex-col items-center w-[160px] h-[240px] mr-5 bg-white rounded-2xl'>
                    <Image
                        source={TopHospitalDataImageMap[item.image]}
                        className='w-full h-40 rounded-t-2xl'
                        resizeMode='stretch'
                    />
                    <Text className='text-center text-sm mt-2 font-medium p-2'>
                        {item.name}
                    </Text>
                </Pressable>
            )}
        />
    )
}

export default TopHospitalsFlatList
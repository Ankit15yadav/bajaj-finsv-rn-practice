import { labTestCardImageMap } from '@/Data/home-page'
import { ILabTest } from '@/types/types'
import React from 'react'
import { Image, Pressable, Text } from 'react-native'

const LabTestsCard = ({ icon, id, onPress, title }: ILabTest) => {
    return (
        <Pressable
            // onPress={onPress}
            className='w-[30%] h-36 rounded-md  p-3 justify-between items-center'
        >
            <Image
                source={labTestCardImageMap[icon]}
                className='w-24 h-24 bg-white rounded-lg border border-gray-300 p-5'
                resizeMode='contain'
            />
            <Text
                className='text-center text-gray-600 font-semibold mt-2'
                numberOfLines={2}
                ellipsizeMode='tail'
            >
                {title}
            </Text>
        </Pressable>
    )
}

export default LabTestsCard

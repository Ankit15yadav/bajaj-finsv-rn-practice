import { symptomsCardImageMap } from '@/Data/home-page'
import { SymptomsCardTypes } from '@/types/types'
import React from 'react'
import { Image, Pressable, Text } from 'react-native'

const SymptomsCard = ({ icon, id, onPress, title }: SymptomsCardTypes) => {
    return (
        <Pressable className='w-[30%] flex items-center justify-center'>
            <Image
                source={symptomsCardImageMap[icon]}
                className=' flex items-center justify-center
                w-24 h-24 border border-gray-300 rounded-md p-5'
                resizeMode='contain'
            />
            <Text className='mt-2 font-medium text-lg text-center  '>
                {title}
            </Text>
        </Pressable>
    )
}

export default SymptomsCard
import { DoctorCards, SearchSectionImageMap } from '@/Data/home-page-doctor-cards'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, Image, Pressable } from 'react-native'

const DoctorFlatList = () => {
    return (
        <FlatList
            className='mt-6'
            data={DoctorCards}
            renderItem={({ item }) => (
                <Pressable
                    className='mr-6'
                    onPress={() => router.push(item.onPress)}
                >
                    <Image
                        source={SearchSectionImageMap[String(item.icon)]}
                        className="w-[210px] h-[120px] rounded-xl"
                        resizeMode="cover"
                    />
                </Pressable>
            )}
            horizontal
        />
    )
}

export default DoctorFlatList
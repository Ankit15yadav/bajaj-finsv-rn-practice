import OnlineIndicatorSmall from '@/components/online-indicator-small'
import { doctorCardImageMap } from '@/Data/home-page'
import { DoctorSepcialitiesCard } from '@/types/types'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const DoctorSpecialitiesCard = ({ icon, numberOfDocs, onPress, title }: DoctorSepcialitiesCard) => {
    return (
        <Pressable
            onPress={() => router.push(onPress)}
            className="w-[30%] mb-4 rounded-md"
            style={styles.shadowStyle}
        >
            <View className="h-44 p-2 bg-white rounded-md flex-col justify-between">

                {/* Number of doctors */}
                <View className="absolute top-1 left-4 flex-row items-center gap-2 bg-gray-200 rounded-md pl-1 pr-4 py-1 shadow-sm shadow-gray-500">
                    <OnlineIndicatorSmall />
                    <Text className="text-[9px] font-bold">{numberOfDocs} Doctors</Text>
                </View>

                {/* Title View */}
                <View className="mt-7">
                    <Text className="text-xs font-extrabold">{title}</Text>
                </View>

                {/* Image View */}
                <View className="flex-1 justify-end items-end">
                    <Image
                        source={doctorCardImageMap[icon]}
                        className="w-20 h-20 absolute -bottom-2 -right-2"
                        resizeMode="contain"
                    />
                </View>
            </View>
        </Pressable>
    )
}

export default DoctorSpecialitiesCard

const styles = StyleSheet.create({
    shadowStyle: {
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Android shadow
        elevation: 3,
    },
})

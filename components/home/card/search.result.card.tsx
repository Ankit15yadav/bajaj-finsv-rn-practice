import { Doctor } from '@/types/types'
import { ChevronRightIcon } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const SearchInputResultCardHomePage = ({ doctor }: { doctor?: Doctor }) => {
    return (
        <Pressable className="w-full">
            <View className="flex flex-row items-center justify-between w-full pt-6 px-6 pb-3">
                <View className="flex flex-row gap-4">
                    <Image
                        source={{ uri: doctor?.profileImage! }}
                        className="w-12 h-12 rounded-lg bg-gray-100 p-3"
                    />
                    <View className="flex flex-col items-start justify-center">
                        <Text className="font-medium">{doctor?.fullName}</Text>
                        <Text className="uppercase text-xs font-bold text-gray-400">
                            {doctor?.specialization.split(',')[0].toUpperCase()}
                        </Text>
                    </View>
                </View>
                <ChevronRightIcon size={20} />
            </View>

            {/* bottom border starting from below name to chevron */}
            <View className="flex-row items-center justify-between px-6">
                <View className="ml-16 border-b border-gray-200 flex-1" />
            </View>
        </Pressable>
    )
}

export default SearchInputResultCardHomePage

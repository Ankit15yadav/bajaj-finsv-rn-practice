import React from 'react'
import { View } from 'react-native'

export const OnlineIndicatorSmall = () => {
    return (
        <View className={`w-4 h-4 bg-green-100 rounded-full items-center justify-center`}>
            <View className={`w-2 h-2 bg-green-600 rounded-full`} />
        </View>
    )
}

export default OnlineIndicatorSmall
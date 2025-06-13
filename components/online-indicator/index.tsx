import React from 'react'
import { View } from 'react-native'

export const OnlineIndicator = () => {
    return (
        <View className={`w-5 h-5 bg-green-100 rounded-full items-center justify-center`}>
            <View className={`w-3 h-3 bg-green-600 rounded-full`} />
        </View>
    )
}

export default OnlineIndicator
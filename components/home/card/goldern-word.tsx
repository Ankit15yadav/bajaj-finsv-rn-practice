import React from 'react'
import { Text } from 'react-native'

const GoldenCardWords = ({ className, color, coloredText, text }: { className?: string, color?: string, coloredText: string, text: string }) => {
    return (
        <Text className='flex flex-row '>
            <Text className={`${className} ${color}`}>{coloredText} </Text>
            <Text className={`${className}`} >
                {text}
            </Text>
        </Text>
    )
}

export default GoldenCardWords
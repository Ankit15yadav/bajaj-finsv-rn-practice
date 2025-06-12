import { Link, router } from 'expo-router'
import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import GoldenCardWords from './goldern-word'

const RaiseAClaimCard = () => {
    return (
        <View className='w-5/6 mx-auto h-auto mt-6'>
            <Pressable className='flex flex-row justify-center  border-2 border-orange-200 rounded-xl h-auto p-2 bg-orange-50'
                onPress={() => router.push("/health-pay")}
            >
                <View className='flex flex-col gap-y-0 w-7/12'>

                    <Text className='text-[15px] font-bold text-gray-600 mb-1'>
                        Why raise a claim?
                        {'\n'}
                        Go Cashless
                    </Text>

                    {/* card content left side */}
                    <View className='flex flex-col gap-y-0.5 max-w-50 '>
                        <GoldenCardWords color='text-amber-500' className='font-bold text-sm' coloredText='Zero' text='Wait,' />
                        <GoldenCardWords color='text-amber-500' className='font-bold text-sm' coloredText='No' text='Paperwork &' />
                        <GoldenCardWords color='text-amber-500' className='font-bold text-sm' coloredText='100+' text='labs to choose from!' />
                        <Link
                            href={"/health-pay"}
                            className='mt-1 text-bajaj underline text-sm font-bold'
                        >
                            Know More
                        </Link>
                    </View>

                </View>
                <View className='flex items-end justify-center w-5/12 p-0'>
                    <TouchableOpacity className='bg-amber-500 px-6 py-2 rounded-full'
                        onPress={() => router.push('/health-files')}
                    >
                        <Text className='text-white font-bold'>
                            Book
                        </Text>
                    </TouchableOpacity>
                </View>

            </Pressable>
        </View>
    )
}

export default RaiseAClaimCard
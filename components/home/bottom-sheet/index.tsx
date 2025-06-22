import { useLocation } from '@/contexts/location.context'
import { GetDoctorsDetails } from '@/service/operations/doctors.api'
import { Doctor } from '@/types/types'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { ArrowLeft, ChevronDown, LocationEditIcon } from 'lucide-react-native'
import React, { useEffect, useState } from 'react'
import { Keyboard, Pressable, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

const BottomSheetContent = () => {

    const { addressOfUser } = useLocation()

    const [input, setInput] = useState<string | null>(null)
    const [focus, setFocus] = useState<boolean>(false)
    const [locationModal, setLocationModal] = useState<boolean>(false);
    const [result, setResult] = useState<Doctor[]>([])
    const [noResult, setNoResult] = useState<string>('')

    async function getSearchResult() {
        const data = await GetDoctorsDetails({ name: input?.trim() || '', })
        if (data.length === 0) {
            setNoResult('No result Found')
        }
        setResult(data)
    }

    useEffect(() => {

        let timer: any
        if (input) {
            setResult([])
            setNoResult('')
            timer = setTimeout(async () => {
                await getSearchResult()
            }, 500);
        }
        return () => {
            clearTimeout(timer)
        }

    }, [input])

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
        >
            <BottomSheetScrollView className='flex-1 py-3 px-4'>
                {/* search bar option */}
                <View className='w-full flex flex-row items-center gap-3'>
                    <ArrowLeft size={20} />
                    <View className='flex-1'>
                        <TextInput
                            className={`flex-1 h-14 rounded-xl p-3 bg-gray-200 ${focus ? 'border-2 border-black' : ''}`}
                            placeholder='Search'
                            placeholderTextColor={'gray'}
                            value={input!}
                            onChangeText={setInput}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            keyboardAppearance='dark'
                            returnKeyType='done'
                        />
                    </View>
                </View>

                {/* location selection */}
                <View className=' mt-4'>
                    <Pressable
                        className='flex flex-row gap-2 items-center justify-start'
                        onPress={() => setLocationModal(true)}
                    >
                        <LocationEditIcon size={15} fontWeight={'bold'} />
                        <Text className='font-semibold text-sm'>
                            {addressOfUser?.name},
                        </Text>
                        <Text className='font-semibold text-sm'>
                            {addressOfUser?.city}
                        </Text>
                        <ChevronDown size={15} fontWeight='bold' />
                    </Pressable>
                </View>

                {/* doctor's information */}
                {
                    result.length > 0
                        ? (<ScrollView className='flex-1'>
                            <View className=''>
                                {
                                    result?.map((doctor, index) => (
                                        <>
                                            <Text key={index}>
                                                {doctor.fullName}
                                            </Text>
                                        </>
                                    ))
                                }
                            </View>
                        </ScrollView>)
                        :
                        (
                            <Text>
                                {noResult}
                            </Text>
                        )
                }

                {/* set location modal */}
                {
                    locationModal && (
                        <View className='flex '>
                            <Text>
                                hello world
                            </Text>
                        </View>
                    )
                }
            </BottomSheetScrollView>

        </TouchableWithoutFeedback>
    )
}

export default BottomSheetContent
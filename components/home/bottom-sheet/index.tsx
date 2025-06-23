import NoResultsComponent from '@/components/svgs/no-result'
import { useLocation } from '@/contexts/location.context'
import { GetDoctorsDetails } from '@/service/operations/doctors.api'
import { Doctor } from '@/types/types'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { ArrowLeft, ChevronDown, LocationEditIcon, ShieldAlert, X } from 'lucide-react-native'
import React, { useEffect, useState } from 'react'
import { Keyboard, Pressable, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import SearchInputResultCardHomePage from '../card/search.result.card'

const BottomSheetContent = () => {

    const { addressOfUser, setShowLocationModal, errorMsg } = useLocation()


    const [input, setInput] = useState<string | null>(null)
    const [focus, setFocus] = useState<boolean>(false)
    const [locationModal, setLocationModal] = useState<boolean>(false);
    const [result, setResult] = useState<Doctor[]>([])
    const [noResult, setNoResult] = useState<boolean>(false)

    async function getSearchResult() {
        const data = await GetDoctorsDetails({ name: input?.trim() || '', })

        if (data.length === 0) {
            setNoResult(true)
            return;
        }
        // console.log('got the result', data)
        setResult(data)
    }

    useEffect(() => {

        // debouncing for the api calls
        let timer: any
        if (input) {
            setResult([])
            setNoResult(false)
            timer = setTimeout(async () => {
                await getSearchResult()
            }, 400);
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
                    <View className={`flex-1 flex-row justify-center items-center ${focus ? 'border-2 border-black' : ''}
                    bg-gray-200 rounded-xl px-3`}>
                        <TextInput
                            className={`flex-1 h-14 `}
                            placeholder='Search'
                            placeholderTextColor={'gray'}
                            value={input!}
                            onChangeText={setInput}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            keyboardAppearance='dark'
                            returnKeyType='done'
                        />
                        {
                            input && (
                                <X
                                    size={16}
                                    className='p-3'
                                    onPress={() => {
                                        setInput('')
                                        setResult([])
                                        setNoResult(false)
                                    }}
                                />
                            )
                        }
                    </View>
                </View>

                {/* location selection */}
                <View className=' mt-4 border-b border-b-gray-300 pb-5'>
                    {
                        errorMsg ?
                            (<Pressable
                                onPress={() => setShowLocationModal((prev) => !prev)}
                            >
                                <Text className='font-extrabold text-bajaj'>Give Permission</Text>
                            </Pressable>)
                            :
                            (<Pressable
                                className='flex flex-row gap-2 items-center justify-start'
                                onPress={() => setShowLocationModal((prev) => !prev)}
                            >
                                <LocationEditIcon size={15} fontWeight={'bold'} />
                                <Text className='font-semibold text-sm'>
                                    {addressOfUser?.district},
                                </Text>
                                <Text className='font-semibold text-sm'>
                                    {addressOfUser?.city}
                                </Text>
                                <ChevronDown size={15} fontWeight='bold' />
                            </Pressable>)
                    }

                </View>

                {/* doctor's information */}
                {
                    errorMsg
                    &&
                    (<View className='flex flex-row items-center justify-center gap-2 mt-10'>
                        <ShieldAlert size={15} color={'red'} />
                        <Text className='text-sm font-bold text-red-400'>
                            {errorMsg}
                        </Text>
                    </View>)
                }

                {
                    result.length > 0
                        ?
                        (<ScrollView className='flex-1 mt-4'>
                            <View className='flex flex-col gap-2'>
                                {
                                    result?.map((doctor, index) => (
                                        <SearchInputResultCardHomePage key={index} doctor={doctor} />
                                    ))
                                }
                                <TouchableOpacity className='mt-2'>
                                    <Text className='text-bajaj font-bold text-sm text-center'>
                                        View all results in <Text className='uppercase'>Doctor</Text>
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>)
                        :
                        (
                            noResult && (
                                <View className='flex items-center'>
                                    <NoResultsComponent />
                                </View>
                            )
                        )
                }
            </BottomSheetScrollView>
        </TouchableWithoutFeedback>
    )
}

export default BottomSheetContent
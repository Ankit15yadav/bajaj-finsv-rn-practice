import { useLocation } from '@/contexts/location.context'
import { LocateFixed, MapPin, Search } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

const LocationModal = () => {
    const { setShowLocationModal, refreshLocation } = useLocation()

    return (
        // this touchable is the outer that shows the blurrrr effect
        <TouchableWithoutFeedback onPress={() => setShowLocationModal(false)}>
            <View className="absolute inset-0 z-50 bg-black/40 justify-center items-center">
                {/* main context of the modal */}
                <TouchableWithoutFeedback onPress={() => { }}>

                    <View className="w-5/6 mx-auto h-auto bg-white rounded-xl justify-center items-center p-2">
                        {/* upper headings */}

                        <View className='flex flex-col items-center justify-center gap-2 mt-4 '>
                            <MapPin size={18} strokeWidth={3} />
                            <Text className='font-extrabold text-center text-[14px] text-gray-700'>Allow us to access your location?</Text>
                            <Text className='text-center text-sm text-gray-600'>Location service help us to find best healthcare services near you!</Text>
                        </View>

                        {/* pressables for location setting */}

                        <View className='mt-6 w-full px-3'>
                            {/* turn on the device location  */}
                            <TouchableOpacity
                                className='border-t border-t-gray-200'
                                onPress={refreshLocation}
                            >
                                <View className='flex flex-row items-center justify-center gap-2 mt-4 mb-4'>
                                    <LocateFixed size={20} strokeWidth={3} />
                                    <Text className='font-bold text-gray-700'>
                                        Turn on Device Location
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/* select location manually */}
                            <TouchableOpacity
                                className='border-t border-t-gray-200'
                            >
                                <View className='flex flex-row items-center justify-center gap-2 mt-3 mb-4'>
                                    <Search size={18} strokeWidth={3} />
                                    <Text className='font-bold text-gray-700'>
                                        Select Location Manually
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/* button for closing modal */}
                            <TouchableOpacity
                                className='border-t border-t-gray-200'
                                onPress={() => setShowLocationModal(false)}
                            >
                                <Text className='text-center mt-4 mb-4 font-bold text-gray-600'>Skip for now</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LocationModal

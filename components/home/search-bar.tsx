import * as Haptic from 'expo-haptics'
import { MicIcon, Search } from 'lucide-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface SearchBarHomePageProps {
    onSearchPress: () => void
}

const SearchBarHomePage = ({ onSearchPress }: SearchBarHomePageProps) => {

    const handlePress = () => {
        onSearchPress()
        Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Soft)

    }

    return (
        <View className='flex-1'>
            <View className="flex-row gap-2 items-center justify-between w-full p-[13px] mt-[15px] rounded-[10px] bg-white shadow-lg">
                <TouchableOpacity
                    className="p-0.5 flex-1"
                    onPress={handlePress}
                >
                    <Text className="text-[10px] font-extrabold text-gray-500">
                        Search Doctors, Hospitals, Symptoms ...
                    </Text>
                </TouchableOpacity>

                <View className="flex-row items-center gap-2.5">
                    <Search size={20} color={'#004da8'} strokeWidth={3} />
                    <Text className="w-[0.5px] h-full bg-gray-500" />
                    <TouchableOpacity onPress={handlePress}>
                        <MicIcon size={20} color={'#004da8'} strokeWidth={3} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default SearchBarHomePage
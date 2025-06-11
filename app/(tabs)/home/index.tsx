import { CardItem, imageMap } from '@/assets/hero-section-data/Data'
import * as Haptic from "expo-haptics"
import { router } from 'expo-router'
import { HeartIcon, MicIcon, Search } from 'lucide-react-native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import DoctorFlatList from './_components/doctor.flatList'
// import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {

    return (
        <ScrollView
            style={{
                flex: 1
            }}
        >
            {/* <SafeAreaView className="bg-white flex-1"> */}
            {/* main view */}
            <View>
                {/* cards of the doc, lab , hospital , pharmacy */}
                <View className="flex-row p-5 gap-2.5 items-center justify-between h-auto mb-5">
                    {
                        CardItem.map((card) => (
                            <TouchableOpacity
                                key={card.id}
                                className="flex-col items-center gap-2"
                            >
                                <View className="bg-gray-100 h-[75px] w-[75px] rounded-[20px] flex-row items-center justify-center shadow-sm">
                                    {/* <card.icon size={40}
                                        color={'#004DA8'}
                                    /> */}
                                    <Image
                                        source={imageMap[String(card.icon)]}
                                        width={2}
                                        height={2}
                                        resizeMode='cover'
                                        className="w-10 h-10"
                                    />
                                </View>
                                <Text className="text-[13px] font-bold text-gray-500">
                                    {card.title}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>

                {/* search section */}
                <View className="pt-5 bg-[#E6F7FF] p-5">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-xl font-black text-[#004da8]">
                            Hi Ankit
                        </Text>
                        <TouchableOpacity>
                            <Text className="w-[30px] h-[30px] rounded-full border-[6px] bg-yellow-400 border-[#004da8]">
                                <HeartIcon color={''} />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* search bar */}
                    <View className="flex-row gap-2 items-center justify-between w-full p-[13px] mt-[15px] rounded-[10px] bg-white shadow-lg">
                        <TouchableOpacity
                            className="p-0.5 flex-1"
                            onPress={() => {
                                router.push("/(notifications)")
                                Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Soft)
                            }}
                        >
                            <Text className="text-[10px] font-extrabold text-gray-500">
                                Search Doctors, Hospitals, Symptoms ...
                            </Text>
                        </TouchableOpacity>

                        <View className="flex-row items-center gap-2.5">
                            <Search size={20} color={'#004da8'} strokeWidth={3} />
                            <Text className="w-[0.5px] h-full bg-gray-500" />
                            <TouchableOpacity>
                                <MicIcon size={20} color={'#004da8'} strokeWidth={3} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* view for flat list */}
                    <View>
                        <DoctorFlatList />
                    </View>
                </View>

            </View>
            {/* </SafeAreaView> */}
        </ScrollView>

    )
}

export default Home
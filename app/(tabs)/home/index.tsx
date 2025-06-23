import { CardItem, imageMap } from '@/assets/hero-section-data/Data'
import BottomSheetContent from '@/components/home/bottom-sheet'
import RaiseAClaimCard from '@/components/home/card/raise-a-claim'
import ConsultDoctorsSection from '@/components/home/consult.doctor.section'
import DoctorFlatList from '@/components/home/flat-lists/doctor.flatList'
import LabTests from '@/components/home/lab.tests'
import SearchBarHomePage from '@/components/home/search-bar'
import SelectSymptoms from '@/components/home/symptoms.selection'
import TopHospitalsComponent from '@/components/home/top.hospital'
import { useUser } from '@/contexts/user.context'
import BottomSheet from '@gorhom/bottom-sheet'
import { HeartIcon } from 'lucide-react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Home = () => {
    const { user } = useUser()

    // Bottom sheet setup
    const snapPoints = useMemo(() => ['70%', '90%'], [])
    const bottomSheetRef = useRef<BottomSheet>(null)

    const openBottomSheet = useCallback(() => {
        // console.log("open bottom sheet triggered")
        bottomSheetRef.current?.snapToIndex(2)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {/* main view */}
                <View className=''>
                    {/* cards of the doc, lab , hospital , pharmacy */}
                    <View className="flex-row p-5 gap-2.5 items-center justify-between h-auto mb-5">
                        {
                            CardItem.map((card) => (
                                <TouchableOpacity
                                    key={card.id}
                                    className="flex-col items-center gap-2"
                                >
                                    <View className="bg-gray-100 h-[75px] w-[75px] rounded-[20px] flex-row items-center justify-center shadow-sm">
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
                                Hi {user?.firstName}
                            </Text>
                            <TouchableOpacity>
                                <Text className="w-[30px] h-[30px] rounded-full border-[6px] bg-yellow-400 border-[#004da8]">
                                    <HeartIcon color={''} />
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* search bar */}
                        <SearchBarHomePage onSearchPress={openBottomSheet} />

                        {/* view for flat list */}
                        <View>
                            <DoctorFlatList />
                        </View>
                    </View>

                    {/* raise claim card */}
                    <View>
                        <RaiseAClaimCard />
                    </View>

                    {/* consult doctor section */}
                    <View className='p-5'>
                        <ConsultDoctorsSection />
                    </View>

                    <View className='p-5'>
                        <SelectSymptoms />
                    </View>

                    <View className='p-5 bg-slate-200'>
                        <LabTests />
                        <TopHospitalsComponent />
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Sheet - positioned at root level */}
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backgroundStyle={{ backgroundColor: 'white' }}
                handleIndicatorStyle={{ backgroundColor: '#ccc' }}
            >
                <BottomSheetContent />
            </BottomSheet>
        </View>
    )
}

export default Home
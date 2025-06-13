import { DoctorSpecialityCardsData } from '@/Data/home-page'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import OnlineIndicator from '../online-indicator'
import DoctorSpecialitiesCard from './card/doctor-specialities-card'

const ConsultDoctorsSection = () => {
    return (
        <View className='mt-2'>
            {/* header section */}
            <View className='flex flex-row items-center justify-between'>
                <Text className='text-center text-2xl font-bold tracking-wide'> Consult Instantly</Text>
                <View className='
                flex flex-row items-center gap-2
                text-center bg-gray-300 px-3 py-1 rounded-lg'>
                    <Text className='text-lg font-bold'>
                        200+ Doctors
                    </Text>
                    <OnlineIndicator />
                </View>
            </View>

            {/* specialities section */}
            <View className='mt-6 flex flex-col gap-6'>
                {/* TODO */}
                <Text className='text-sm font-normal'> Consult any top doctors online in <Text className='font-bold'>just 60 seconds</Text> </Text>
                {/* Text above consult doctors card */}
                <View className='flex flex-row justify-between items-center'>
                    <Text className='text-xl font-bold'>Popular Specialities</Text>
                    {/* TODO : router push to online consult */}
                    <TouchableOpacity>
                        <Text className='font-bold text-bajaj text-xl'>View All</Text>
                    </TouchableOpacity>
                </View>

                {/* Doctors specialities card */}
                <View className='flex flex-row flex-wrap justify-between'>
                    {
                        DoctorSpecialityCardsData?.map((doc) => (
                            <DoctorSpecialitiesCard
                                key={doc.id}
                                icon={doc.icon}
                                id={doc.id}
                                numberOfDocs={doc.numberOfDocs}
                                onPress={doc.onPress}
                                title={doc.title}
                            />
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default ConsultDoctorsSection
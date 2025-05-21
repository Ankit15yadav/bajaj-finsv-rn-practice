import { CardItem } from '@/assets/hero-section-data/Data'
import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import { router } from 'expo-router'
import { HeartIcon, MicIcon, Search } from 'lucide-react-native'
import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Home = () => {

    const navigator = useNavigation()

    return (
        <ScrollView>
            {/* main view */}
            <View
                style={{
                }}
            >
                {/* cards of the doc, lab , hospital , pharmacy */}
                <View
                    style={{
                        flexDirection: 'row',
                        padding: 20,
                        gap: 10,
                        alignItems: 'center',
                        justifyContent: "space-between",
                        height: 'auto',
                        marginBottom: 20
                    }}
                >
                    {
                        CardItem.map((card) => (
                            <TouchableOpacity key={card.id}
                                style={{
                                    flexDirection: 'column',
                                    alignItems: "center",
                                    gap: 8
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#E6E6E6',
                                        height: 75,
                                        width: 75,
                                        borderRadius: 20,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        shadowColor: "#ECECEC"

                                    }}
                                >
                                    <card.icon size={40}
                                        color={'#004DA8'}
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontWeight: "600"
                                    }}
                                >
                                    {card.title}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>

                {/* search section */}
                <View
                    style={{
                        paddingTop: 20,
                        backgroundColor: '#E6F7FF',
                        padding: 20
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "900",
                                color: "#004da8"
                            }}
                        >
                            Hi Ankit
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 100,
                                    borderWidth: 6,
                                    backgroundColor: "gold",
                                    borderColor: "#004da8"
                                }}
                            >
                                <HeartIcon color={''} />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* search bar */}
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 8,
                            alignItems: 'center',
                            justifyContent: "space-between",
                            width: '100%',
                            // borderWidth: 1,
                            padding: 12,
                            marginTop: 15,
                            borderRadius: 10,
                            backgroundColor: "white"


                        }}
                    >
                        <TextInput
                            style={{
                                // borderWidth: 1,
                                boxShadow: '',
                                padding: 2,
                                // borderRadius: 10,
                                // backgroundColor: 'white',
                                color: 'grey',
                                fontSize: 10,
                                flex: 1,
                                fontWeight: "800"

                            }}
                            placeholder='Search Doctors, Hospitals, Symptoms ...'
                            placeholderTextColor={'gray'}
                            // onPress={() => router.push("/notification")}
                            onFocus={() => router.push('/notification')}
                            onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}

                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                gap: 10
                                // marginTop: 15
                            }}
                        >
                            <Search size={20} color={'#004da8'} strokeWidth={3} />
                            <Text
                                style={{
                                    width: 0.5,
                                    height: '100%',
                                    backgroundColor: 'grey'
                                }}
                            />
                            <TouchableOpacity>
                                <MicIcon size={20} color={'#004da8'} strokeWidth={3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home
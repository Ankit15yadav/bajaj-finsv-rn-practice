import { CardItem, imageMap } from '@/assets/hero-section-data/Data'
import * as Haptic from "expo-haptics"
import { router } from 'expo-router'
import { HeartIcon, MicIcon, Search } from 'lucide-react-native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Home = () => {

    return (
        <ScrollView
            style={{
                backgroundColor: 'white'
            }}
        >
            {/* main view */}
            <View
                style={{
                    backgroundColor: ''
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
                                        backgroundColor: '#f3f4f6',
                                        height: 75,
                                        width: 75,
                                        borderRadius: 20,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        shadowColor: "#ECECEC"

                                    }}
                                >
                                    {/* <card.icon size={40}
                                        color={'#004DA8'}
                                    /> */}
                                    <Image
                                        source={imageMap[String(card.icon)]}
                                        width={2}
                                        height={2}
                                        style={{
                                            width: 40,
                                            height: 40
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontWeight: "700",
                                        color: "gray"
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
                            padding: 13,
                            marginTop: 15,
                            borderRadius: 10,
                            backgroundColor: "white",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: 2,
                                flex: 1,
                            }}
                            onPress={() => {
                                router.push("/notification")
                                Haptic.impactAsync()
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 10,
                                    fontWeight: "800",
                                    color: 'gray'
                                }}
                            >
                                Search Doctors, Hospitals, Symptoms ...
                            </Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                gap: 10
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
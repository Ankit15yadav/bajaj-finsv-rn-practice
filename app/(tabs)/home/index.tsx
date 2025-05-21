import { CardItem } from '@/assets/hero-section-data/Data'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Home = () => {

    const navigator = useNavigation()

    return (
        <ScrollView>
            {/* main view */}
            <View
                style={{
                    padding: 20
                }}
            >
                {/* cards of the doc, lab , hospital , pharmacy */}
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                        justifyContent: "space-between",
                        height: 'auto'
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
                                        fontSize: 14,
                                        fontWeight: "800"
                                    }}
                                >
                                    {card.title}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default Home
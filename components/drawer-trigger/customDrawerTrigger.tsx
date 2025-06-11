import Ionicons from '@expo/vector-icons/Ionicons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

const CustomTrigger = () => {

    const navigation = useNavigation()

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'
        }} >
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Ionicons name="menu-outline" size={28}
                    style={{
                        marginLeft: 10,
                        color: 'white',
                        fontWeight: '900'
                    }}
                />
            </TouchableOpacity>

            <Image source={require('../../assets/images/bajaj-health.jpeg')}
                style={{
                    width: 80,
                    height: 40
                }}
            />
        </View>
    )
}

export default CustomTrigger
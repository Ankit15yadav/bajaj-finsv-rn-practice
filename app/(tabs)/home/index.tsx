import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Home = () => {

    const navigator = useNavigation()

    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigator.dispatch(DrawerActions.openDrawer())}
            >
                <Text >
                    Drawer
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
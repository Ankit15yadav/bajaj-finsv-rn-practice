import { customDrawerContent } from "@/components/drawer-custom-drawer";
import CustomTrigger from "@/components/drawer-trigger/customDrawerTrigger";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { Dimensions, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Layout = () => {

    const screenWidth = Dimensions.get('window').width
    const isLargeScreen = Dimensions.get('window').width >= 768;
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={customDrawerContent}
                screenOptions={{
                    drawerStyle: {
                        width: screenWidth * 0.75,
                        zIndex: 12000,
                        elevation: 20

                    },
                    drawerHideStatusBarOnOpen: false,
                    headerShown: true,
                }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        drawerItemStyle: {
                            display: 'none'
                        },
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomTrigger />
                        ),

                        headerRight: () => (
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: "center",
                                }}
                                onPress={() => router.push('/(notifications)')}
                            >
                                <Ionicons
                                    name="notifications"
                                    size={23}
                                    style={{
                                        marginRight: 15,
                                        color: "#004DA8"
                                    }}
                                />
                            </TouchableOpacity>

                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}


export default Layout
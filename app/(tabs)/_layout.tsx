import LocationProvider from "@/contexts/location.context";
import { TabData } from "@/Data/Tabs-data";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptic from 'expo-haptics';
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function RootTabLayout() {
    return <LocationProvider>
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#004DA8',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ color, focused }) => {
                    // Find the corresponding tab data
                    const tab = TabData.find((t) => t.name === route.name);

                    return (
                        <View style={styles.tabIconContainer}>
                            {/* Top indicator, only visible when focused */}
                            {focused && (
                                <View style={styles.activeIndicator} />
                            )}
                            <Ionicons
                                name={tab?.iconName as React.ComponentProps<typeof Ionicons>['name']}
                                size={18}
                                color={color}
                            />
                        </View>
                    );
                },
            })}
        >
            {
                TabData.map((tab) => (
                    <Tabs.Screen
                        key={tab.id}
                        name={tab.name}
                        options={{
                            headerShown: tab.id === 1 ? false : true,
                            title: tab.title,
                            // headerLeft: () => (
                            //     <View>
                            //         <Text>
                            //             back
                            //         </Text>
                            //     </View>
                            // )
                        }}
                        listeners={{
                            tabPress: () => (
                                Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Soft)
                            )
                        }}
                    />
                ))
            }
        </Tabs>
    </LocationProvider>
}

const styles = StyleSheet.create({
    tabBar: {
        height: 90,
        paddingBottom: 10,
    },
    tabIconContainer: {
        alignItems: 'center',
    },
    activeIndicator: {
        position: 'absolute',
        top: -10,
        width: 60,
        height: 3,
        backgroundColor: '#004DA8',
        borderRadius: 10,
    }
});
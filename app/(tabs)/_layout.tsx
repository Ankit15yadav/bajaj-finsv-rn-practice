import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootTabLayout() {
    return <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#004DA8',
        }}
    >
        <Tabs.Screen name="home" options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={18} color={color} />
            )
        }} />
        <Tabs.Screen name="wellsure"
            options={{
                headerShown: true,
                title: "Wellsure",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="medkit" size={18} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="health-pay"
            options={{
                headerShown: true,
                title: "Health Pay",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="logo-paypal" size={18} color={color} />
                )
            }} />

        <Tabs.Screen
            name="active-plans"
            options={{
                headerShown: true,
                title: "Active Plans",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="paper-plane" size={18} color={color} />
                )
            }} />
        <Tabs.Screen
            name="health-files"
            options={{
                headerShown: true,
                title: "Health Files",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="file-tray-full" size={18} color={color} />
                )
            }} />
    </Tabs>
}
import "@/global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="notification" options={{
      headerShown: true,
      headerTitle: "Notifications",
      headerTitleStyle: {
        fontSize: 14,
        fontWeight: "800",
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => router.replace('/home')}
          style={{
            width: 30,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Ionicons name="chevron-back-outline" size={20} />
        </TouchableOpacity>
      ),

      headerRight: () => (
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical-outline" size={20} />
        </TouchableOpacity>
      ),
    }}
    />
  </Stack>
}
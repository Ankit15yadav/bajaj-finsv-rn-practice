import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";



export default function RootLayout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity
        onPress={() => router.push('/(tabs)/health-pay')}
      >
        <Text>
          setting.tsx
        </Text>
      </TouchableOpacity>
    </View>
  );
}

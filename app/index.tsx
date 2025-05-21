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

      {/* <Link href={"/user/7"}>
        User
      </Link> */}
      {/* <Link
        href={{
          pathname: "/product/[...rest]",
          params: { rest: ["deal", "big-billion-days", "laptop", "500000"] },
        }}
      >
        Product
      </Link>
      <Link href={{
        pathname: '/product/[...rest]',
        params: { rest: ['deal'] }
      }}> */}
      products
      {/* </Link> */}
    </View>
  );
}

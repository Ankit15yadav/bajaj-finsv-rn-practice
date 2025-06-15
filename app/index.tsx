import { getStoredData } from "@/utils/asyncStorage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import SignIn from "./(auth)/sign-in";

export default function RootLayout() {

  const [value, setValue] = useState<boolean>(true)


  useEffect(() => {

    const getToken = async () => {
      // AsyncStorage.clear()
      const token = await getStoredData<string>('auth-token');
      const isVerified = await getStoredData<boolean>('isVerified') ?? false;
      if (token && isVerified) {
        router.replace('/home');
      } else {
        setValue(false); // Show sign-in if not verified or no token
      }
    }
    getToken();

  }, [])

  return (

    <>
      {
        value ? (
          <View className="min-h-screen bg-white flex items-center justify-center">
            <Image source={require('../assets/images/logo-small.png')}
              style={{
                width: '50%',
                height: '10%'
              }}
            />
          </View>

        ) : <SignIn />
      }
    </>


  );
}

// AIzaSyCw6QvpPJYJx3Xb5xCQ96-bUekJvnhmbOg
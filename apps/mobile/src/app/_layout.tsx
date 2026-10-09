import "../../global.css"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import { useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { CormorantGaramond_400Regular, CormorantGaramond_500Medium, CormorantGaramond_600SemiBold, CormorantGaramond_500Medium_Italic } from "@expo-google-fonts/cormorant-garamond"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Stack } from "expo-router"

import { AuthProvider, useAuth } from "../auth/AuthContext"

SplashScreen.preventAutoHideAsync()

function RootNavigator() {
  const { signedIn } = useAuth()
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={signedIn}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>
      <Stack.Protected guard={!signedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={__DEV__}>
        <Stack.Screen name="gallery" options={{ headerShown: true, title: "Gallery" }} />
      </Stack.Protected>
    </Stack>
  )
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
    CormorantGaramond_400Regular,
    CormorantGaramond_500Medium,
    CormorantGaramond_600SemiBold,
    CormorantGaramond_500Medium_Italic,
  })

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded || fontError) {
      hideSplashScreen()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <View className="flex-1 bg-background">
          <RootNavigator />
          <StatusBar style="dark" />
        </View>
      </SafeAreaProvider>
    </AuthProvider>
  )
}

import "./global.css"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import { useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { CormorantGaramond_400Regular, CormorantGaramond_500Medium, CormorantGaramond_600SemiBold, CormorantGaramond_500Medium_Italic } from "@expo-google-fonts/cormorant-garamond"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Gallery from "./src/ui/gallery/Gallery"

SplashScreen.preventAutoHideAsync()

export default function App() {
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
    <SafeAreaProvider>
      <View className="flex-1 bg-background">
        <Gallery />
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  )
}

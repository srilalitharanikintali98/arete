import "./global.css"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import { useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"

import Gallery from "./src/ui/gallery/Gallery"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
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
    <View className="flex-1 bg-background items-center justify-center gap-2">
      <Gallery />
      <StatusBar style="dark" />
    </View>
  )
}

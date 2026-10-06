import "./global.css"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import { useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { GOAL_STATUSES } from "@arete/shared"

// Placeholder screen. Proves the workspace wiring (@arete/shared) works in Metro.
// Real screens come after the v0 web flow is in daily use.

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
      <Text className="text-display uppercase font-inter-light text-primary">ARETE</Text>
      <Text className="text-body font-inter-regular text-content-secondary">Goal statuses: {GOAL_STATUSES.join(" / ").toLowerCase()}</Text>
      <Text className="font-inter-light">Test 1</Text>
      <Text className="font-inter-regular">Test 2</Text>
      <Text className="font-inter-semibold">Test 3</Text>

      <StatusBar style="dark" />
    </View>
  )
}

import "./global.css"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import { useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter"
import { StatusBar } from "expo-status-bar"
import { Text as RNText, View } from "react-native"
import { GOAL_STATUSES } from "@arete/shared"
import { Text } from "./src/ui/foundations/Text"

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
      <RNText className="text-display uppercase font-inter-light text-primary">ARETE</RNText>
      <RNText className="text-body font-inter-regular text-content-secondary">Goal statuses: {GOAL_STATUSES.join(" / ").toLowerCase()}</RNText>
      <RNText className="font-inter-light">Test 1</RNText>
      <RNText className="font-inter-regular">Test 2</RNText>
      <RNText className="font-inter-semibold">Test 3</RNText>
      <Text variant="heading-lg">Hello</Text>
      <Text variant="heading-lg" className="text-primary">
        Hello
      </Text>
      <Text variant="body" className="text-heading-sm">
        Hello
      </Text>
      <StatusBar style="dark" />
    </View>
  )
}

import { useCallback, useState } from "react"
import { ScrollView, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useFocusEffect } from "expo-router"
import { Screen } from "../../ui/foundations/Screen"
import { HeroSection } from "./sections/HeroSection"

export function TodayScreen() {
  const [focused, setFocused] = useState(false)
  useFocusEffect(
    useCallback(() => {
      setFocused(true)
      return () => setFocused(false)
    }, []),
  )

  return (
    <Screen edges={["left", "right"]}>
      {focused ? <StatusBar style="light" /> : null}
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <HeroSection />
        <View className="-mt-[28px] gap-xl rounded-t-xl bg-background px-lg pb-[52px] pt-xl"></View>
      </ScrollView>
    </Screen>
  )
}

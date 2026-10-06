import "./global.css"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { GOAL_STATUSES } from "@arete/shared"

// Placeholder screen. Proves the workspace wiring (@arete/shared) works in Metro.
// Real screens come after the v0 web flow is in daily use.

export default function App() {
  return (
    <View className="flex-1 bg-[#F7F3EC] items-center justify-center gap-2">
      <Text className="text-2xl font-light text-[#2E4B36]">ARETE</Text>
      <Text className="text-lg text-[#6B6B6B]">Goal statuses: {GOAL_STATUSES.join(" / ").toLowerCase()}</Text>
      <StatusBar style="dark" />
    </View>
  )
}

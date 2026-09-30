import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { GOAL_STATUSES } from "@arete/shared"

// Placeholder screen. Proves the workspace wiring (@arete/shared) works in Metro.
// Real screens come after the v0 web flow is in daily use.
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>ARETE</Text>
      <Text style={styles.caption}>Goal statuses: {GOAL_STATUSES.join(" / ").toLowerCase()}</Text>
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3EC",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  wordmark: { color: "#2E4B36", fontSize: 24, fontWeight: "300", letterSpacing: 4 },
  caption: { color: "#6B6B6B", fontSize: 14 },
})

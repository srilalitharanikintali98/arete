import { Text } from "react-native"
import { Link } from "expo-router"

import { Screen } from "../../ui/foundations/Screen"

export default function MeScreen() {
  return (
    <Screen>
      {__DEV__ ? <Link href="/gallery">Gallery</Link> : null}
      <Text>Me</Text>
    </Screen>
  )
}

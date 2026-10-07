import { useState } from "react"
import { ScrollView, View } from "react-native"

import { Pressable } from "../foundations/Pressable"
import { Screen } from "../foundations/Screen"
import { Text } from "../foundations/Text"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-3">
      <Text variant="eyebrow" className="text-content-secondary">
        {title}
      </Text>
      {children}
    </View>
  )
}

function Gallery() {
  const [count, setCount] = useState(0)

  return (
    <Screen>
      <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-8 px-4 pt-4 pb-8">
        <Section title="Text variants">
          <Text variant="display">Display</Text>
          <Text variant="heading-lg">Heading Large</Text>
          <Text variant="heading-sm">Heading Small</Text>
          <Text variant="body">Body</Text>
          <Text variant="eyebrow">Eyebrow</Text>
          <Text variant="label">Label</Text>
        </Section>

        <Section title="Text overrides">
          <Text>Plain, no props (charcoal body)</Text>
          <Text variant="heading-lg" className="text-primary">
            Color override (forest green)
          </Text>
          <Text variant="body" className="text-heading-sm">
            Size override (22px)
          </Text>
        </Section>

        <Section title="Pressable">
          <Pressable className="items-center justify-center rounded-md border border-line px-4" onPress={() => setCount((c) => c + 1)}>
            <Text>Tapped {count} times (hold to see the fade)</Text>
          </Pressable>

          <Pressable className="items-center justify-center self-start rounded-md bg-tint" onPress={() => setCount((c) => c + 1)}>
            <View className="h-4 w-4 bg-primary" />
          </Pressable>

          <Pressable disabled className="items-center justify-center rounded-md border border-line px-4" onPress={() => setCount((c) => c + 1)}>
            <Text>Disabled (should not count)</Text>
          </Pressable>
        </Section>
      </ScrollView>
    </Screen>
  )
}

export default Gallery

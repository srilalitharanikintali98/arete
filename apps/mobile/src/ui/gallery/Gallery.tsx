import { useState } from "react"
import { ScrollView, View } from "react-native"

import { Pressable } from "../foundations/Pressable"
import { Screen } from "../foundations/Screen"
import { Text } from "../foundations/Text"
import { Icon, IconName } from "../foundations/Icon"
import { Button } from "../foundations/Button"
import { GrowthStage, type GrowthStageName } from "../components/GrowthStage"
import { StreakIndicator } from "../components/StreakIndicator"

const iconNames: IconName[] = [
  "check",
  "archive",
  "edit",
  "add",
  "back",
  "droplet",
  "calendar",
  "home",
  "grid",
  "progress",
  "goals",
  "me",
]
const stages: GrowthStageName[] = ["planted", "sprouting", "growing", "flourishing"]

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

        <Section title="Serif fonts">
          <Text variant="display-name">Lalitha</Text>
          <Text variant="quote-identity">Someone who shows up every day</Text>
          <Text variant="heading-serif">What will you do today?</Text>
          <Text variant="title-serif">Run a half marathon</Text>
          <Text variant="greeting">Good evening,</Text>
          <Text variant="caption-serif">That's who you're becoming.</Text>
          <Text variant="meta">Meta line, 13px Inter</Text>
        </Section>

        <Section title="Icons">
          <View className="flex-row flex-wrap gap-4">
            {iconNames.map((name) => (
              <Icon key={name} name={name} />
            ))}
          </View>
          <View className="flex-row gap-4">
            <Icon name="droplet" size={40} />
            <Icon name="check" color="#B89B53" />
          </View>
        </Section>
        <Section title="Pressable">
          <Pressable
            className="items-center justify-center rounded-md border border-line px-4"
            onPress={() => setCount((c) => c + 1)}
          >
            <Text>Tapped {count} times (hold to see the fade)</Text>
          </Pressable>

          <Pressable
            className="items-center justify-center self-start rounded-md bg-tint"
            onPress={() => setCount((c) => c + 1)}
          >
            <View className="h-4 w-4 bg-primary" />
          </Pressable>

          <Pressable
            disabled
            className="items-center justify-center rounded-md border border-line px-4"
            onPress={() => setCount((c) => c + 1)}
          >
            <Text>Disabled (should not count)</Text>
          </Pressable>
        </Section>

        <Section title="Button">
          <Button label="Continue" onPress={() => {}} />
          <Button label="Continue" variant="secondary" onPress={() => {}} />
          <Button label="Continue" variant="ghost" onPress={() => {}} />
          <Button label="Continue" disabled />
          <Button label="Continue" variant="secondary" disabled />
          <Button label="Continue" variant="ghost" disabled />
        </Section>

        <Section title="Growth Stage">
          <View className="flex-row gap-lg">
            {stages.map((stage) => (
              <View key={stage} className="items-center gap-xs">
                <GrowthStage stage={stage} />
                <Text variant="meta">{stage}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="Streak Indicator">
          <View className="gap-md">
            <StreakIndicator days={12} />
            <StreakIndicator days={0} />
          </View>
        </Section>
      </ScrollView>
    </Screen>
  )
}

export default Gallery

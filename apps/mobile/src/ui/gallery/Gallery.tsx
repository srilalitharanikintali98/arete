import { ScrollView, View } from "react-native"

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
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-8 px-4 pb-16 pt-16">
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
    </ScrollView>
  )
}

export default Gallery

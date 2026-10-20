import { View } from "react-native"
import { Pressable } from "../foundations/Pressable"
import { Text } from "../foundations/Text"

type SectionStateProps = {
  state: "empty" | "error"
  title: string
  body: string
  action: string
  onAction?: () => void
}

export function SectionState({ state, title, body, action, onAction }: SectionStateProps) {
  return (
    <View className="gap-sm py-lg">
      <View className="flex-row items-center gap-sm">
        {state === "error" ? <View className="h-[8px] w-[8px] rounded-full bg-clay" /> : null}
        <Text variant="caption-serif">{title}</Text>
      </View>
      <Text variant="body" className="text-content-secondary">
        {body}
      </Text>
      {/* Pressable is 44pt tall for touch; the negative margin keeps the layout at the text's 18pt, as in Figma. */}
      <Pressable
        onPress={onAction}
        accessibilityRole="button"
        className="-my-[13px] justify-center self-start"
      >
        <Text variant="label" className="text-primary underline">
          {action}
        </Text>
      </Pressable>
    </View>
  )
}

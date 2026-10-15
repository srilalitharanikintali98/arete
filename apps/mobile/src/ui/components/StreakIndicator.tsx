import { View } from "react-native"
import { primitives, semantic } from "@arete/tokens"
import { Icon } from "../foundations/Icon"
import { Text } from "../foundations/Text"

type StreakIndicatorProps = {
  days: number
}

export function StreakIndicator({ days }: StreakIndicatorProps) {
  const active = days > 0

  return (
    <View className="flex-row items-center gap-xs">
      <Icon name="droplet" size={16} color={active ? semantic.icon.primary : primitives["gray-disabled"]} />
      <Text variant="meta" className={active ? "text-content" : "text-content-disabled"}>
        {`${days} ${days === 1 ? "day" : "days"}`}
      </Text>
    </View>
  )
}

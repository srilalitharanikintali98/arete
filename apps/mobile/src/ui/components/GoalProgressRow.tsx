import { View } from "react-native"
import { Text } from "../foundations/Text"
import { GrowthStage, type GrowthStageName } from "./GrowthStage"

// TODO: Once the APIs are in place recheck prop types

type GoalProgressRowProps = {
  title: string
  meta: string
  stage: GrowthStageName
  last?: boolean
}

export function GoalProgressRow({ title, meta, stage, last = false }: GoalProgressRowProps) {
  return (
    <View
      className={
        last
          ? "flex-row items-center gap-md px-xs py-sm-md"
          : "flex-row items-center gap-md border-b border-divider px-xs py-sm-md"
      }
    >
      <GrowthStage stage={stage} />
      <View className="flex-1 gap-2xs">
        <Text variant="title-serif" numberOfLines={1}>
          {title}
        </Text>
        <Text variant="meta" className="text-content-secondary">
          {meta}
        </Text>
      </View>
    </View>
  )
}

import { View } from "react-native"
import { Text } from "../foundations/Text"
import Checkbox from "./Checkbox"

// TODO: Once the APIs are in place recheck prop types

type TaskRowProps = {
  title: string
  meta: string
  done: boolean
  overdue?: boolean
  last?: boolean
  onToggle?: () => void
}

export function TaskRow({
  title,
  meta,
  done,
  overdue = false,
  last = false,
  onToggle,
}: TaskRowProps) {
  return (
    <View
      className={
        last
          ? "flex-row items-center gap-sm p-xs"
          : "flex-row items-center gap-sm border-b border-divider p-xs"
      }
    >
      <Checkbox checked={done} onChange={() => onToggle?.()} accessibilityLabel={title} />
      <View className="flex-1 gap-2xs">
        <Text variant="body" className={done ? "text-content-secondary" : "text-content"}>
          {title}
        </Text>
        <View className="flex-row items-center gap-[6px]">
          {overdue && !done ? <View className="h-[6px] w-[6px] rounded-full bg-clay" /> : null}
          <Text variant="meta" className="flex-1 text-content-secondary">
            {meta}
          </Text>
        </View>
      </View>
    </View>
  )
}

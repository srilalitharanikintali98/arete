import { View } from "react-native"
import { DailyProgress } from "../../../ui/components/DailyProgress"
import { SectionHeader } from "../../../ui/components/SectionHeader"
import { Text } from "../../../ui/foundations/Text"

export type ProgressState = "loading" | "unavailable" | "empty" | "ready"

type TodayProgressProps = {
  state: ProgressState
  done: number
  total: number
}

function captionFor(state: ProgressState, allDone: boolean) {
  if (allDone) return "That's who you're becoming."
  if (state === "ready") return "Each one is a small promise kept."
  if (state === "empty") return "A quiet start. Add one small thing to begin."
  if (state === "unavailable") return "Today's progress will appear once everything loads."
  return null
}

export function TodayProgress({ state, done, total }: TodayProgressProps) {
  const ready = state === "ready"
  const allDone = ready && total > 0 && done === total
  const caption = captionFor(state, allDone)

  return (
    <View className="gap-sm">
      <SectionHeader>{ready ? `Today · ${done} of ${total}` : "Today"}</SectionHeader>
      <Text variant="heading-serif">
        {allDone
          ? "You did what you said you would."
          : "What will you do today to become that person?"}
      </Text>
      {ready ? <DailyProgress total={total} done={done} /> : null}
      {caption ? (
        <Text variant="caption-serif" className="text-content-secondary">
          {caption}
        </Text>
      ) : null}
    </View>
  )
}

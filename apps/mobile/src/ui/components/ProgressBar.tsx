import { View } from "react-native"

type ProgressBarProps = {
  total: number
  done: number
}

export function ProgressBar({ total, done }: ProgressBarProps) {
  const completed = Math.min(Math.max(done, 0), total)
  const isComplete = total > 0 && completed === total
  const percent = total > 0 ? (completed / total) * 100 : 0

  return (
    <View accessible accessibilityRole="progressbar" accessibilityLabel={`${completed} of ${total} done`} accessibilityValue={{ min: 0, max: total, now: completed }} className="h-[4px] w-full">
      {isComplete ? (
        <View className="h-full flex-row">
          <View className="h-full flex-1 rounded-l-full bg-primary" />
          <View className="h-full w-[28px] rounded-r-full bg-gold" />
        </View>
      ) : (
        <View className="h-full overflow-hidden rounded-full bg-tint">
          <View className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
        </View>
      )}
    </View>
  )
}

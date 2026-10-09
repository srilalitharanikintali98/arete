import { View } from "react-native"

type ProgressDotsProps = {
  total: number
  done: number
}

export function ProgressDots({ total, done }: ProgressDotsProps) {
  const completed = Math.min(Math.max(done, 0), total)
  const isComplete = total > 0 && completed === total

  return (
    <View accessible accessibilityRole="progressbar" accessibilityLabel={`${completed} of ${total} done`} accessibilityValue={{ min: 0, max: total, now: completed }} className="flex-row gap-sm pb-[2px] pt-[6px]">
      {Array.from({ length: total }, (_, index) => {
        const isLast = index === total - 1
        const color = isComplete && isLast ? "bg-gold" : index < completed ? "bg-primary" : "bg-tint"
        return <View key={index} className={`h-[4px] w-[28px] rounded-full ${color}`} />
      })}
    </View>
  )
}

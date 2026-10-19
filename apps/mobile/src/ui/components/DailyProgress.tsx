import { View } from "react-native"
import ProgressBar from "./ProgressBar"
import ProgressDots from "./ProgressDots"

export const MAX_DOTS = 8

type DailyProgressProps = {
  total: number
  done: number
}

export function DailyProgress({ total, done }: DailyProgressProps) {
  if (total > MAX_DOTS) {
    return (
      <View className="pb-[2px] pt-[6px]">
        <ProgressBar total={total} done={done} />
      </View>
    )
  }

  return <ProgressDots total={total} done={done} />
}

import { Pressable as RNPressable, PressableProps } from "react-native"

import { cn } from "../cn"

type Props = PressableProps & {
  className?: string
}

export function Pressable({ className, ...rest }: Props) {
  return <RNPressable accessibilityRole="button" className={cn("min-h-11 min-w-11 active:opacity-70 disabled:opacity-50", className)} {...rest} />
}

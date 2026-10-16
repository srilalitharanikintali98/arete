import { View } from "react-native"
import { primitives, semantic } from "@arete/tokens"
import { cn } from "../cn"
import { Icon } from "../foundations/Icon"
import { Pressable } from "../foundations/Pressable"
import { Text } from "../foundations/Text"
import { StreakIndicator } from "./StreakIndicator"

// TODO: Habit item props will change later do - doing this for sample screen

type HabitTokenProps = {
  name: string
  streak: number
  done: boolean
  onPress?: () => void
  className?: string
}

function HabitToken({ name, streak, done, onPress, className }: HabitTokenProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: done }}
      accessibilityLabel={name}
      className={cn("items-center gap-[6px]", className)}
    >
      <View
        className={
          done
            ? "h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-primary bg-primary"
            : "h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-tint"
        }
      >
        {done ? (
          <Icon name="check" size={24} color={primitives.ivory} />
        ) : (
          <Icon name="droplet" size={24} color={semantic.icon.secondary} />
        )}
      </View>
      <Text variant="meta" className="self-stretch text-center">
        {name}
      </Text>
      <StreakIndicator days={streak} />
    </Pressable>
  )
}

export default HabitToken

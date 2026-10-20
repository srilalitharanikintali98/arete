import { View } from "react-native"
import { HabitToken } from "../../../ui/components/HabitToken"
import { SectionHeader } from "../../../ui/components/SectionHeader"
import { SectionLoading } from "../../../ui/components/SectionLoading"
import { SectionState } from "../../../ui/components/SectionState"
import type { Habit, Status } from "../types"

type HabitsBlockProps = {
  habits: Habit[]
  status: Status
  onToggle: (id: string) => void
  onRetry: () => void
}

export function HabitsBlock({ habits, status, onToggle, onRetry }: HabitsBlockProps) {
  const hasHabits = status === "ready" && habits.length > 0
  const doneCount = habits.filter((habit) => habit.done).length

  return (
    <View className="gap-md border-t border-divider pb-xs pt-md">
      <SectionHeader>
        {hasHabits ? `Habits · ${doneCount} of ${habits.length} done` : "Habits"}
      </SectionHeader>
      {status === "loading" ? <SectionLoading /> : null}
      {status === "error" ? (
        <SectionState
          state="error"
          title="Couldn't load your habits."
          body="Check your connection and try again."
          action="Try again"
          onAction={onRetry}
        />
      ) : null}
      {status === "ready" && habits.length === 0 ? (
        <SectionState
          state="empty"
          title="No habits yet."
          body="A habit is something small you do on repeat."
          action="Add a habit"
        />
      ) : null}
      {hasHabits ? (
        <View className="flex-row gap-sm">
          {habits.map((habit) => (
            <HabitToken
              key={habit.id}
              name={habit.name}
              streak={habit.streak}
              done={habit.done}
              onPress={() => onToggle(habit.id)}
              className="flex-1"
            />
          ))}
        </View>
      ) : null}
    </View>
  )
}

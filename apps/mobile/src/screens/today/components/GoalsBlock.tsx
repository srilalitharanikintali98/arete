import { View } from "react-native"
import { GoalProgressRow } from "../../../ui/components/GoalProgressRow"
import { SectionHeader } from "../../../ui/components/SectionHeader"
import { SectionLoading } from "../../../ui/components/SectionLoading"
import { SectionState } from "../../../ui/components/SectionState"
import type { Goal, Status } from "../types"

type GoalsBlockProps = {
  goals: Goal[]
  status: Status
  onRetry: () => void
}

export function GoalsBlock({ goals, status, onRetry }: GoalsBlockProps) {
  return (
    <View className="gap-md">
      <SectionHeader>The goals getting you there</SectionHeader>
      {status === "loading" ? <SectionLoading /> : null}
      {status === "error" ? (
        <SectionState
          state="error"
          title="Couldn't load your goals."
          body="Check your connection and try again."
          action="Try again"
          onAction={onRetry}
        />
      ) : null}
      {status === "ready" && goals.length === 0 ? (
        <SectionState
          state="empty"
          title="No goals yet."
          body="Start with one thing you want to keep working towards."
          action="Add your first goal"
        />
      ) : null}
      {status === "ready" && goals.length > 0 ? (
        <View className="border-b border-t border-divider pt-md">
          {goals.map((goal, index) => (
            <GoalProgressRow
              key={goal.id}
              title={goal.title}
              meta={goal.meta}
              stage={goal.stage}
              last={index === goals.length - 1}
            />
          ))}
        </View>
      ) : null}
    </View>
  )
}

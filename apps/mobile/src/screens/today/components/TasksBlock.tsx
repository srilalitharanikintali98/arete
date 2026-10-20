import { View } from "react-native"
import { SectionHeader } from "../../../ui/components/SectionHeader"
import { SectionLoading } from "../../../ui/components/SectionLoading"
import { SectionState } from "../../../ui/components/SectionState"
import { TaskRow } from "../../../ui/components/TaskRow"
import type { Status, Task } from "../types"

type TasksBlockProps = {
  tasks: Task[]
  status: Status
  onToggle: (id: string) => void
  onRetry: () => void
}

export function TasksBlock({ tasks, status, onToggle, onRetry }: TasksBlockProps) {
  const hasTasks = status === "ready" && tasks.length > 0
  const openCount = tasks.filter((task) => !task.done).length

  return (
    <View className="border-t border-divider pt-md">
      <SectionHeader>{hasTasks ? `Tasks · ${openCount} to do` : "Tasks"}</SectionHeader>
      {status === "loading" ? <SectionLoading /> : null}
      {status === "error" ? (
        <SectionState
          state="error"
          title="Couldn't load your tasks."
          body="Check your connection and try again."
          action="Try again"
          onAction={onRetry}
        />
      ) : null}
      {status === "ready" && tasks.length === 0 ? (
        <SectionState
          state="empty"
          title="Nothing on your list."
          body="Add a task, or enjoy the space."
          action="Add a task"
        />
      ) : null}
      {hasTasks
        ? tasks.map((task, index) => (
            <TaskRow
              key={task.id}
              title={task.title}
              meta={task.meta}
              done={task.done}
              overdue={task.overdue}
              last={index === tasks.length - 1}
              onToggle={() => onToggle(task.id)}
            />
          ))
        : null}
    </View>
  )
}

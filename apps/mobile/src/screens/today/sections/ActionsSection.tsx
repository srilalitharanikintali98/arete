import { View } from "react-native"
import { HabitsBlock } from "../components/HabitsBlock"
import { TasksBlock } from "../components/TasksBlock"
import { TodayProgress, type ProgressState } from "../components/TodayProgress"
import { useHabits } from "../hooks/useHabits"
import { useTasks } from "../hooks/useTasks"

export function ActionsSection() {
  const { habits, status: habitsStatus, retry: retryHabits, toggle: toggleHabit } = useHabits()
  const { tasks, status: tasksStatus, retry: retryTasks, toggle: toggleTask } = useTasks()

  const total = habits.length + tasks.length
  const done =
    habits.filter((habit) => habit.done).length + tasks.filter((task) => task.done).length

  const anyError = habitsStatus === "error" || tasksStatus === "error"
  const bothReady = habitsStatus === "ready" && tasksStatus === "ready"
  const progressState: ProgressState = anyError
    ? "unavailable"
    : !bothReady
      ? "loading"
      : total === 0
        ? "empty"
        : "ready"

  return (
    <View className="gap-xl">
      <TodayProgress state={progressState} done={done} total={total} />
      <HabitsBlock
        habits={habits}
        status={habitsStatus}
        onToggle={toggleHabit}
        onRetry={retryHabits}
      />
      <TasksBlock tasks={tasks} status={tasksStatus} onToggle={toggleTask} onRetry={retryTasks} />
    </View>
  )
}

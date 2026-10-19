import { useCallback } from "react"
import { FAIL, HABITS } from "../../../sample/today"
import { useSampleData } from "./useSampleData"

export function useHabits() {
  const { data, status, update, retry } = useSampleData(HABITS, FAIL.habits)

  const toggle = useCallback(
    (id: string) =>
      update((list) =>
        list.map((habit) => (habit.id === id ? { ...habit, done: !habit.done } : habit)),
      ),
    [update],
  )

  return { habits: data ?? [], status, retry, toggle }
}

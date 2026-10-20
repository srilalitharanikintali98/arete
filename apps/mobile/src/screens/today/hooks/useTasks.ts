import { useCallback } from "react"
import { FAIL, TASKS } from "../../../sample/today"
import { useSampleData } from "./useSampleData"

export function useTasks() {
  // TODO: Update to API Call
  const { data, status, update, retry } = useSampleData(TASKS, FAIL.tasks)

  const toggle = useCallback(
    (id: string) =>
      update((list) => list.map((task) => (task.id === id ? { ...task, done: !task.done } : task))),
    [update],
  )

  return { tasks: data ?? [], status, retry, toggle }
}

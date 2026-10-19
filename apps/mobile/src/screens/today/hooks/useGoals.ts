import { FAIL, GOALS } from "../../../sample/today"
import { useSampleData } from "./useSampleData"

export function useGoals() {
  const { data, status, retry } = useSampleData(GOALS, FAIL.goals)
  return { goals: data ?? [], status, retry }
}

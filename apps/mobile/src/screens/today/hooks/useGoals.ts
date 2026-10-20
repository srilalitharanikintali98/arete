import { FAIL, GOALS } from "../../../sample/today"
import { useSampleData } from "./useSampleData"

export function useGoals() {
  // TODO: Update to API Call
  const { data, status, retry } = useSampleData(GOALS, FAIL.goals)
  return { goals: data ?? [], status, retry }
}

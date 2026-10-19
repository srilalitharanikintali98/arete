import { GoalsBlock } from "../components/GoalsBlock"
import { useGoals } from "../hooks/useGoals"

export function GoalsSection() {
  const { goals, status, retry } = useGoals()

  return <GoalsBlock goals={goals} status={status} onRetry={retry} />
}

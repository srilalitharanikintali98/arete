import { z } from "zod"
import { GOAL_STATUSES, type GoalStatus } from "./status"

export const goalsListQuerySchema = z.object({
  status: z.enum(GOAL_STATUSES).optional(),
})

export type GoalsListQuery = z.infer<typeof goalsListQuerySchema>

export type GoalListItem = {
  id: string
  title: string
  status: GoalStatus
  lifeArea: { id: string; name: string }
  progress: number // 0 to 100
}

export type GoalsListResponse = {
  summary: { total: number; active: number }
  goals: GoalListItem[]
}

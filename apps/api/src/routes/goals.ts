import { Hono } from "hono"
import {
  GoalListItem,
  goalsListQuerySchema,
  GoalStatus,
  type GoalsListResponse,
} from "@arete/shared"
import { prisma } from "@arete/db"
import { verifyToken, requireUser, type AuthEnv } from "../middleware/auth"

export const goalsRoutes = new Hono<AuthEnv>()

goalsRoutes.use(verifyToken, requireUser)

// TEMPORARY: progress will be calculated from tasks and habits later.
const PLACEHOLDER_PROGRESS: Record<GoalStatus, number> = {
  DONE: 100,
  ACTIVE: 60,
  PAUSED: 25,
  INTEREST: 0,
}

goalsRoutes.get("/", async (c) => {
  const query = goalsListQuerySchema.safeParse(c.req.query())
  if (!query.success) {
    return c.json({ error: "Invalid status filter" }, 400)
  }

  const userId = c.get("userId")
  const { status } = query.data

  const [total, active, rows] = await Promise.all([
    prisma.goal.count({ where: { userId } }),
    prisma.goal.count({ where: { userId, status: "ACTIVE" } }),
    prisma.goal.findMany({
      where: { userId, ...(status && { status }) },
      select: {
        id: true,
        title: true,
        status: true,
        lifeArea: { select: { id: true, name: true } },
      },
      orderBy: [{ createdAt: "desc" }, { id: "asc" }],
    }),
  ])

  const goals: GoalListItem[] = rows.map((g) => ({
    ...g,
    progress: PLACEHOLDER_PROGRESS[g.status],
  }))

  const response: GoalsListResponse = { summary: { total, active }, goals }
  return c.json(response)
})

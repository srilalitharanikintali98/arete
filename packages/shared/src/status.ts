// Mirrors the Prisma `GoalStatus` enum. Lives here so client code (web components,
// mobile) can use it without importing the database package.
export const GOAL_STATUSES = ["ACTIVE", "INTEREST", "PAUSED", "DONE"] as const

export type GoalStatus = (typeof GOAL_STATUSES)[number]

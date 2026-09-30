// Server-only. Never import this package from client components or apps/mobile.
// Client-safe enums: `@arete/db/enums` (or GOAL_STATUSES from @arete/shared).
export { prisma } from "./client"
export * from "./generated/prisma/client"

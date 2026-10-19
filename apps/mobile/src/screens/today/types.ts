import type { GrowthStageName } from "../../ui/components/GrowthStage"

export type Status = "loading" | "error" | "ready"

export type Goal = { id: string; title: string; meta: string; stage: GrowthStageName }
export type Habit = { id: string; name: string; streak: number; done: boolean }
export type Task = { id: string; title: string; meta: string; done: boolean; overdue: boolean }
export type Profile = { name: string; identity: string | null }

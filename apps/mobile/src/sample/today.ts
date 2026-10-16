import type { GrowthStageName } from "../ui/components/GrowthStage"

export type Goal = { id: string; title: string; meta: string; stage: GrowthStageName }
export type Habit = { id: string; name: string; streak: number; done: boolean }
export type Task = { id: string; title: string; meta: string; done: boolean; overdue: boolean }

export const PROFILE = {
  name: "Lalitha",
  identity: "Someone who keeps small promises to themselves.",
}

export const GOALS: Goal[] = [
  { id: "g1", title: "Run a half marathon", meta: "Health · Growing", stage: "growing" },
  { id: "g2", title: "Learn system design", meta: "Learning · Sprouting", stage: "sprouting" },
]

export const HABITS: Habit[] = [
  { id: "h1", name: "Morning walk", streak: 12, done: true },
  { id: "h2", name: "Read 20 min", streak: 4, done: false },
  { id: "h3", name: "Evening stretch", streak: 0, done: false },
]

export const TASKS: Task[] = [
  {
    id: "t1",
    title: "Book dentist appointment",
    meta: "Overdue · Health",
    done: false,
    overdue: true,
  },
  {
    id: "t2",
    title: "Read chapter 4 of Deep Work",
    meta: "Today · Learning",
    done: false,
    overdue: false,
  },
  {
    id: "t3",
    title: "Plan next week's workouts",
    meta: "Today · Health",
    done: false,
    overdue: false,
  },
]

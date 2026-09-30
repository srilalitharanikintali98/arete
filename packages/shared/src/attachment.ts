import { z } from "zod"

/**
 * Tasks and Habits may attach to a Goal or a Project, never both.
 * Validate this on every write path (form, server action, API route, mobile),
 * not just the form — see the "Attachment ambiguity" risk in the v0 build steps.
 */
export const parentRefSchema = z
  .object({
    projectId: z.uuid().nullish(),
    goalId: z.uuid().nullish(),
  })
  .refine((v) => !(v.projectId && v.goalId), {
    message: "Attach to a goal or a project, not both",
    path: ["goalId"],
  })

export type ParentRef = z.infer<typeof parentRefSchema>

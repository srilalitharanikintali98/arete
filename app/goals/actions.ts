"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { Prisma } from "@/app/generated/prisma/client"
import { GoalStatus } from "@/app/generated/prisma/client"

export async function createGoal(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const lifeAreaId = formData.get("lifeAreaId") as string

  await prisma.goal.create({
    data: { name, description, lifeAreaId },
  })

  revalidatePath("/goals")
}

export async function updateGoal(id: string, formData: FormData) {
  const data: Prisma.GoalUncheckedUpdateInput = {}

  if (formData.has("name")) data.name = formData.get("name") as string
  if (formData.has("description")) data.description = formData.get("description") as string
  if (formData.has("lifeAreaId")) data.lifeAreaId = formData.get("lifeAreaId") as string
  if (formData.has("status")) data.status = formData.get("status") as GoalStatus

  await prisma.goal.update({ where: { id }, data })

  revalidatePath("/goals")
}

import { Hono } from "hono"
import { prisma } from "@arete/db"

export const app = new Hono()

app.get("/health", (c) => c.json({ ok: true }))

app.get("/life-areas", async (c) => {
  const lifeAreas = await prisma.lifeArea.findMany({
    where: { archived: false },
    orderBy: { createdAt: "asc" },
  })
  return c.json(lifeAreas)
})

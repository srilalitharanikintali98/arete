import { Hono } from "hono"
import { prisma } from "@arete/db"
import { goalsRoutes } from "./routes/goals"
import { HTTPException } from "hono/http-exception"

export const app = new Hono()

app.get("/health", (c) => c.json({ ok: true }))

app.get("/life-areas", async (c) => {
  const lifeAreas = await prisma.lifeArea.findMany({
    where: { archived: false },
    orderBy: { createdAt: "asc" },
  })
  return c.json(lifeAreas)
})

app.route("/goals", goalsRoutes)

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ error: err.message }, err.status)
  }
  console.error(err)
  return c.json({ error: "Something went wrong" }, 500)
})

app.notFound((c) => c.json({ error: "Not found" }, 404))

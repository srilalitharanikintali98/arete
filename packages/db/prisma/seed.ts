import { config } from "dotenv"
import { PrismaClient, GoalStatus } from "../src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

config({ path: ["../../.env", ".env"], quiet: true })

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

// v0 keeps to two life areas. Safe to re-run: nothing is created twice.
const seed: {
  lifeArea: string
  goals: { name: string; description?: string; status: GoalStatus }[]
}[] = [
  {
    lifeArea: "Health",
    goals: [
      { name: "Run a 10K", description: "Build up to 10K with three runs a week", status: "ACTIVE" },
      { name: "Learn to swim", status: "INTEREST" },
      { name: "Morning yoga routine", status: "PAUSED" },
    ],
  },
  {
    lifeArea: "Learning",
    goals: [
      { name: "Learn backend development with Node.js", status: "ACTIVE" },
      { name: "Ship Arete v0", description: "One life area working end to end", status: "ACTIVE" },
      { name: "Set up the Arete monorepo", status: "DONE" },
    ],
  },
]

async function main() {
  for (const area of seed) {
    const lifeArea = await prisma.lifeArea.upsert({
      where: { name: area.lifeArea },
      update: {},
      create: { name: area.lifeArea },
    })

    for (const goal of area.goals) {
      const existing = await prisma.goal.findFirst({
        where: { name: goal.name, lifeAreaId: lifeArea.id },
      })
      if (!existing) {
        await prisma.goal.create({
          data: { ...goal, lifeAreaId: lifeArea.id },
        })
      }
    }
  }
  console.log("Seeded life areas and goals")
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

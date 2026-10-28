import { config } from "dotenv"
import { PrismaClient, GoalStatus } from "../src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

config({ path: ["../../.env", ".env"], quiet: true })

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

// v0 keeps to two life areas. Safe to re-run: nothing is created twice.
const seed: {
  lifeArea: string
  goals: { title: string; description?: string; status: GoalStatus }[]
}[] = [
  {
    lifeArea: "Health",
    goals: [
      {
        title: "Run a 10K",
        description: "Build up to 10K with three runs a week",
        status: "ACTIVE",
      },
      { title: "Learn to swim", status: "INTEREST" },
      { title: "Morning yoga routine", status: "PAUSED" },
    ],
  },
  {
    lifeArea: "Learning",
    goals: [
      { title: "Learn backend development with Node.js", status: "ACTIVE" },
      { title: "Ship Arete v0", description: "One life area working end to end", status: "ACTIVE" },
      { title: "Set up the Arete monorepo", status: "DONE" },
    ],
  },
]

async function main() {
  const email = process.env.SEED_USER_EMAIL
  if (!email) {
    throw new Error("SEED_USER_EMAIL is not set. Add it to the root .env file.")
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw new Error(`No user found with email ${email}. Create the account in Supabase Auth first.`)
  }

  for (const area of seed) {
    const lifeArea = await prisma.lifeArea.upsert({
      where: { name: area.lifeArea },
      update: {},
      create: { name: area.lifeArea },
    })

    for (const goal of area.goals) {
      const existing = await prisma.goal.findFirst({
        where: { title: goal.title, lifeAreaId: lifeArea.id, userId: user.id },
      })
      if (!existing) {
        await prisma.goal.create({
          data: { ...goal, lifeAreaId: lifeArea.id, userId: user.id },
        })
      }
    }
  }
  console.log(`Seeded life areas and goals for ${email}`)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

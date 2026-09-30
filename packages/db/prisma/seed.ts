import { config } from "dotenv"
import { PrismaClient } from "../src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

config({ path: ["../../.env", ".env"], quiet: true })

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.lifeArea.create({ data: { name: "Health" } })
  await prisma.lifeArea.create({ data: { name: "Learning" } })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

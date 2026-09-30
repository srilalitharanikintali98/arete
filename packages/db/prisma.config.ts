import { config } from "dotenv"
import { defineConfig } from "prisma/config"

// Prisma commands run from packages/db, so the shared root .env is two levels up.
config({ path: ["../../.env", ".env"], quiet: true })

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DIRECT_URL"],
  },
})

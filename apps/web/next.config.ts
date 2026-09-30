import type { NextConfig } from "next"
import { loadEnvConfig } from "@next/env"
import path from "node:path"

// One shared .env at the repo root (apps/web runs with cwd = apps/web).
// Harmless when the file is absent, e.g. on Vercel where env vars are injected.
loadEnvConfig(path.resolve(process.cwd(), "../.."), process.env.NODE_ENV !== "production")

const nextConfig: NextConfig = {
  // Internal packages are consumed as TypeScript source.
  transpilePackages: ["@arete/db", "@arete/shared"],
}

export default nextConfig

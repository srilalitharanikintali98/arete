import { jwk } from "hono/jwk"
import { createMiddleware } from "hono/factory"

const supabaseUrl = process.env.SUPABASE_URL
if (!supabaseUrl) throw new Error("SUPABASE_URL is not set")

export const verifyToken = jwk({
  jwks_uri: `${supabaseUrl}/auth/v1/.well-known/jwks.json`,
  alg: ["ES256"],
  verification: {
    iss: `${supabaseUrl}/auth/v1`,
    aud: "authenticated",
  },
})

export type AuthEnv = {
  Variables: { userId: string; jwtPayload: unknown }
}

export const requireUser = createMiddleware<AuthEnv>(async (c, next) => {
  const payload = c.get("jwtPayload") as { sub?: unknown } | undefined
  if (typeof payload?.sub !== "string") {
    return c.json({ error: "unauthorized" }, 401)
  }
  c.set("userId", payload.sub)
  await next()
})

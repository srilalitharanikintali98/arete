import { config } from "dotenv"

// Must be imported before anything that reads DATABASE_URL (i.e. @arete/db).
// The API runs with cwd = apps/api, so the shared root .env is two levels up.
config({ path: ["../../.env", ".env"], quiet: true })

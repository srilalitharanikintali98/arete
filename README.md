# Arete

A personal operating system: goals, projects, tasks and habits in one place.
Monorepo containing the web app, mobile app and API.

```
apps/
  web/      Next.js (App Router) — the main app, deployed on Vercel
  api/      Hono API (Node) — for mobile and anything that isn't a server action
  mobile/   Expo / React Native
packages/
  db/       Prisma schema, migrations, seed and the shared client  (@arete/db)
  shared/   Types and validation usable everywhere, incl. mobile   (@arete/shared)
  config/   Shared tsconfig bases                                  (@arete/config)
```

## Getting started

Requires Node >= 20.19 and pnpm (`corepack enable` picks up the pinned version).

```bash
cp .env.example .env     # fill in DATABASE_URL and DIRECT_URL (arete-dev!)
pnpm install             # also runs `prisma generate`
pnpm dev:web             # http://localhost:3000
pnpm dev:api             # http://localhost:4000/health
pnpm dev:mobile          # Expo dev server
```

One `.env` at the repo root is shared by web, api and the Prisma CLI.

## Common commands

| Command | What it does |
|---|---|
| `pnpm dev` | Run every app's dev server via Turborepo |
| `pnpm build` / `pnpm typecheck` / `pnpm lint` | Run across all packages |
| `pnpm db:generate` | Regenerate the Prisma client |
| `pnpm db:migrate:dev` | Create/apply a migration — **arete-dev only** |
| `pnpm db:migrate:deploy` | Apply migrations — the only migrate command for `arete-prod` |
| `pnpm db:seed` | Seed life areas |

## Rules of the road

- **Never run `db:migrate:dev` against `arete-prod`.** Only `migrate deploy`.
- `@arete/db` is server-only. Never import it from client components or `apps/mobile`;
  use `@arete/shared` (or `@arete/db/enums` in web server/client-safe code) instead.
- Internal packages are consumed as TypeScript source — no build step for `db` or `shared`.
- The "at most one of `projectId`/`goalId`" rule lives in `@arete/shared` (`parentRefSchema`);
  use it on every write path (web actions, API routes, mobile).

## Deploying web on Vercel

Set the project's **Root Directory** to `apps/web` (keep "Include source files outside of the
Root Directory" on). `DATABASE_URL` / `DIRECT_URL` stay as they are per environment.

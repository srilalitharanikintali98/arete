<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Monorepo layout

This repo is a pnpm + Turborepo monorepo (`apps/web`, `apps/api`, `apps/mobile`,
`packages/db`, `packages/shared`, `packages/config`). See README.md.

- The Next.js notice above applies to `apps/web`; its docs live in
  `apps/web/node_modules/next/dist/docs/`.
- `@arete/db` is server-only — never import it from client components or `apps/mobile`.
- Never run `prisma migrate dev` against `arete-prod`; only `migrate deploy`.

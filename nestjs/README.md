# NestJS starter

Minimal NestJS app for Orbit Cloud. Deploys with zero configuration: connect
the repo (GitHub, GitLab, or Bitbucket), pick the branch, and deploy — Orbit's
Railpack builder detects Node, runs `npm run build` (`nest build`), and starts
`node dist/main.js`.

## Endpoints

- `GET /` — JSON status payload
- `GET /health` — health check target (returns `200 ok`)

## Conventions this template follows

- Listens on `0.0.0.0` and reads the port from the `PORT` env var.
- Runtime packages live in `dependencies`; build-only tooling
  (`@nestjs/cli`, `typescript`) lives in `devDependencies`.

## Using TypeScript path aliases (`@/...`)

`tsc` and `nest build` do **not** rewrite path aliases in the emitted
JavaScript — `require("@/app.core")` will crash at runtime with
`Cannot find module '@/app.core'` even though it works locally with ts-node.
If you add `paths` to your tsconfig, also resolve them at build time:

```bash
npm i -D tsc-alias
```

```json
{ "scripts": { "build": "nest build && tsc-alias -p tsconfig.build.json" } }
```

(Alternatives: nest's webpack mode, `tsup`, or `module-alias`. Relying on
`node -r tsconfig-paths/register` in production is fragile — it resolves
against your *source* paths, which don't exist in the deployed image.)

## Runtime version

Orbit reads the version your codebase already declares — for this stack:
`engines.node` in package.json, or a `.nvmrc` file. Generic pins in `.tool-versions` or `mise.toml` also work. Declare the
version in your repo and every environment (local, CI, Orbit) stays in sync.

If you need to override it without touching the codebase, set a runtime
version in the service's build settings in the Orbit dashboard.

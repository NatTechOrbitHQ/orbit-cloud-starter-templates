# Next.js starter

Minimal Next.js (App Router) app for Orbit Cloud, deployed as a **web
service** (server-rendered). Zero configuration: connect the repo, pick the
branch, deploy — the builder detects Next.js, runs `next build`, and starts
`next start` bound to `0.0.0.0:$PORT`.

## Endpoints

- `GET /` — server-rendered home page
- `GET /health` — health check route handler (returns `200 ok`)

## Notes

- Path aliases via `jsconfig.json`/`tsconfig.json` `paths` are safe here —
  Next's bundler resolves them at build time (unlike plain `tsc`).
- For a purely static export (`output: "export"`), deploy as a static service
  with output dir `out` instead.

## Runtime version

Orbit reads the Node version your codebase declares (`engines.node` in
package.json, or a `.nvmrc` file). Override per service in the dashboard
build settings if needed.

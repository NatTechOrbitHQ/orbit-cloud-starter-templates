# Nuxt 3 starter

Minimal Nuxt 3 app for Orbit Cloud, deployed as a **web service**
(server-rendered with Nitro). The builder runs `nuxt build` and starts
`node .output/server/index.mjs`, which binds to `0.0.0.0` and honors `$PORT`.

## Endpoints

- `GET /` — server-rendered home page
- `GET /health` — health check route (returns `200 ok`)

## Runtime version

Orbit reads the Node version your codebase declares (`engines.node` in
package.json, or a `.nvmrc` file). Override per service in the dashboard
build settings if needed.

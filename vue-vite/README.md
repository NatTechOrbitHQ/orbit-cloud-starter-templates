# Vue 3 (Vite) starter

Minimal Vue 3 (Vite) starter for Orbit Cloud, deployed as a **static site**: the builder runs
`npm run build` and publishes the `dist/` output to Orbit's static hosting.

## Deploying

1. Connect the repo (GitHub, GitLab, or Bitbucket) and create a **static** service.
2. Build command: `npm run build` (auto-detected). Output dir: `dist` (auto-detected).
3. Enable **SPA fallback** in the service settings if you add client-side routing,
   so deep links serve `index.html`.

## Runtime version

Orbit reads the Node version your codebase declares (`engines.node` in
package.json, or a `.nvmrc` file). Override per service in the dashboard
build settings if needed.

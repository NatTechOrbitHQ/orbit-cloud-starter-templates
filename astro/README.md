# Astro starter

Minimal Astro site for Orbit Cloud, deployed as a **static site**: the builder
runs `npm run build` and publishes the `dist/` output to Orbit's static
hosting. (For SSR, add `@astrojs/node` and deploy as a web service instead.)

## Runtime version

Orbit reads the Node version your codebase declares (`engines.node` in
package.json, or a `.nvmrc` file). Override per service in the dashboard
build settings if needed.

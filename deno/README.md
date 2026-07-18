# Deno starter

Minimal Deno starter for Orbit Cloud. Deploys with zero configuration: connect the repo
(GitHub, GitLab, or Bitbucket), pick the branch, and deploy — Orbit's Railpack
builder detects the stack automatically.

## Endpoints

- `GET /` — JSON status payload
- `GET /health` — health check target (returns `200 ok`)

## Conventions this template follows

- Listens on `0.0.0.0` and reads the port from the `PORT` environment
  variable (never hard-code a port).
- Keeps runtime dependencies in the standard manifest so the builder can
  detect and install them.

## Runtime version

Orbit reads the version your codebase already declares — for this stack:
a `.tool-versions` or `mise.toml` entry. Generic pins in `.tool-versions` or `mise.toml` also work. Declare the
version in your repo and every environment (local, CI, Orbit) stays in sync.

If you need to override it without touching the codebase, set a runtime
version in the service's build settings in the Orbit dashboard.

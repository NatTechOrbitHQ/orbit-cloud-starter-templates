# Orbit Cloud Starter Templates

One deployable starter per language/framework supported by Orbit Cloud's
codebase builds (powered by Railpack). Every template:

- backend/SSR templates serve `GET /` and `GET /health` (200 "ok") for health checks; static SPA templates build to `dist/`,
- listens on `0.0.0.0:$PORT`,
- deploys with zero configuration from GitHub, GitLab, or Bitbucket.

| Template | Stack | Version pinned via |
| --- | --- | --- |
| `node-express` | Node.js + Express | `engines` / `.nvmrc` |
| `nestjs` | NestJS (TypeScript) | `engines` / `.nvmrc` |
| `bun` | Bun | `.bun-version` / `engines` |
| `python-fastapi` | Python + FastAPI + uvicorn | `.python-version` / `pyproject.toml` |
| `go` | Go stdlib | `go.mod` |
| `java-maven` | Java 21 + Maven | `pom.xml` / `.tool-versions` |
| `php` | PHP | `composer.json` |
| `ruby-sinatra` | Ruby + Sinatra + Puma | `Gemfile` / `.ruby-version` |
| `rust` | Rust + tiny_http | `rust-toolchain.toml` |
| `elixir` | Elixir + Plug/Cowboy | `mix.exs` |
| `deno` | Deno | `.tool-versions` / `mise.toml` |
| `dotnet` | .NET 8 minimal API | `.csproj` / `global.json` |
| `react-vite` | React 18 + Vite (static SPA) | `engines` / `.nvmrc` |
| `vue-vite` | Vue 3 + Vite (static SPA) | `engines` / `.nvmrc` |
| `svelte-vite` | Svelte 5 + Vite (static SPA) | `engines` / `.nvmrc` |
| `nextjs` | Next.js 15 App Router (SSR web service) | `engines` / `.nvmrc` |
| `nuxt` | Nuxt 3 (SSR web service) | `engines` / `.nvmrc` |
| `astro` | Astro 5 (static site) | `engines` / `.nvmrc` |
| `static-site` | Plain HTML (static hosting) | — |

## Using these as a release verification matrix

Before promoting builder changes to production, deploy every template from
each connected git provider (GitHub, GitLab, Bitbucket) and require:

1. build succeeds (Railpack detection, install, compile),
2. deploy passes the health gate via `/health`,
3. `GET /` returns the template's JSON payload on the public URL.

A red cell in this matrix is a platform regression, not a user error.

## Runtime versions

Orbit honors the version your codebase declares (`engines`, `.nvmrc`,
`.python-version`, `go.mod`, `.tool-versions`, `mise.toml`, ...). A per-service
override is available in the dashboard build settings for cases where you
can't change the repo.

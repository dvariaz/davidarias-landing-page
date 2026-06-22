# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # start dev server with Turbopack
yarn build      # production build
yarn start      # run production build locally
```

No test runner or linter is configured.

## Environment

Copy `.env.example` to `.env`. The only required variable is:

```
APP_BASE_URL="http://localhost:3000"
```

`APP_BASE_URL` is used by server components to call the internal API routes (e.g. `/api/projects`). It defaults to the Vercel deployment URL in production.

## Architecture

**Next.js 16 App Router** with `[locale]` dynamic segment for i18n via `next-intl`. All pages live under `app/[locale]/`, and the proxy in `proxy.js` redirects users to the correct locale.

### Internationalization

- Supported locales: `en`, `es` (default: `en`)
- Translation files: `i18n/locales/{locale}/*.json` — one JSON file per page section, aggregated by `i18n/locales/{locale}/index.js`
- Routing helpers (`Link`, `redirect`, `useRouter`, etc.) come from `@/i18n/routing`, not from `next/navigation` directly — always import navigation from there to preserve locale prefix

### Module structure

Features are organized under `modules/` by section, following a consistent pattern:

```
modules/<section>/
  containers/   # server or client components that own data fetching and layout
  components/   # pure/presentational components
  utils/        # section-specific helpers
```

`modules/shared/` holds reusable components (`Navbar`, `Button`, `Chip`, `LanguageToggler`, etc.) and the `useKeyTrigger` hook.

### Data flow

Static content (projects, skills, studies, stories) is defined in `config/constants/*.js`. It is exposed through thin API routes under `app/api/` that filter by `?locale=` query param. Server components in `modules/*/containers/` fetch from these routes using `APP_BASE_URL` at render time.

### Styling

- **Tailwind CSS v4** (PostCSS plugin, no `tailwind.config.js` — configuration is in `postcss.config.mjs`)
- Global SCSS files in `config/styles/` (`global.scss`, `layout.scss`, `utils.scss`, `fonts.scss`)
- Component-level `.scss` files colocated with components where needed
- Custom fonts (Gobold family + Poppins) registered in `config/fonts.js` and applied as CSS variables on `<html>` in the layout

### Path alias

`@/*` maps to the project root (configured in `jsconfig.json`). Use `@/` for all internal imports.

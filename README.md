# Madhan Thangavel — Portfolio

Personal portfolio site for Madhan Thangavel, a backend-focused Full Stack
Developer specializing in Flask, Django REST Framework, PostgreSQL, Redis,
Celery, Docker, and REST API engineering.

Live site: https://madhan056.github.io/portfolio

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for tests

## Getting started

Requires Node.js 20+.

```sh
npm ci          # install dependencies from the lockfile
npm run dev     # start the dev server at http://localhost:8080
npm run build   # production build to dist/
npm run preview # preview the production build locally
npm run lint    # run ESLint
npm test        # run the test suite once
```

## Project structure

```
src/
  components/portfolio/   # page sections (Hero, About, Skills, Experience, Projects, Education, Contact)
  components/ui/          # shadcn/ui primitives + a couple of decorative canvas/cursor components
  data/profile.ts         # single source of truth for contact/social links
  pages/                  # route-level components (Index, NotFound)
```

## Deployment

Pushing to `main` triggers `.github/workflows/main.yml`, which builds the
site with Vite and publishes `dist/` to GitHub Pages. The site is served
under the `/portfolio/` base path (see `vite.config.ts`).

This project was originally scaffolded with [Lovable](https://lovable.dev/).

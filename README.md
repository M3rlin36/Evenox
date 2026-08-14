# Evenox

A minimal full-stack task tracker built with [Next.js](https://nextjs.org/) (App Router) and TypeScript. It exists to provide a small, real, end-to-end development experience: an interactive UI backed by an API route with server-side state.

## Requirements

- Node.js 22+
- npm 10+

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the dev server on http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000), type a task, and click **Add task**. The browser POSTs to the API route, which stores the task server-side and returns the updated list.

## Project layout

```
src/
  app/
    api/tasks/route.ts   # GET/POST JSON API for tasks
    layout.tsx           # root layout
    page.tsx             # interactive task tracker UI (client component)
    globals.css          # styles
  lib/
    store.ts             # in-memory task store
    store.test.ts        # unit tests for the store
```

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the Next.js dev server (port 3000)     |
| `npm run build`     | Production build                             |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | Lint with ESLint (`next/core-web-vitals`)    |
| `npm run typecheck` | Type-check with `tsc --noEmit`               |
| `npm test`          | Run unit tests with Vitest                   |

## API

- `GET /api/tasks` → `{ "tasks": Task[] }`
- `POST /api/tasks` with `{ "title": string }` → `201 { "task": Task }`

Tasks are stored in memory for the lifetime of the server process.

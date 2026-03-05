# The Estimator

Monorepo powered by [Turborepo](https://turborepo.dev/).

## Tech Stack

- **Frontend:** [Next.js 16](https://nextjs.org/) + [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [NestJS 11](https://nestjs.com/)
- **Monorepo:** [Turborepo](https://turborepo.dev/) with npm workspaces

## Project Structure

```
apps/
  web/          Next.js frontend (port 3000)
  api/          NestJS backend (port 3001)
packages/
  ui/           Shared React component library
  eslint-config/  Shared ESLint configuration
  typescript-config/  Shared TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10

### Install dependencies

```bash
npm install
```

### Development

Run both apps in parallel:

```bash
npm run dev
```

Run a specific app:

```bash
npx turbo dev --filter=web
npx turbo dev --filter=api
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Adding shadcn/ui components

```bash
cd apps/web
npx shadcn@latest add <component-name>
```

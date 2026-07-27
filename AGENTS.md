# AGENTS.md

## Project

Next.js + TypeScript + Tailwind e-commerce app in `ecommerce/`, built with
Builder.io for content management.

## Setup

```
cd ecommerce
npm install
npm run dev
```

## Structure

- `ecommerce/app/` — Next.js App Router pages
- `ecommerce/components/` — shared React components
- `ecommerce/src/lulu/` — Lulu theme design tokens (colors, type, spacing)
- `ecommerce/tailwind.config.ts` — Tailwind config, wires up Lulu tokens

## Conventions

- Use Tailwind utility classes; reuse existing Lulu tokens instead of
  hardcoding colors/spacing/font sizes on `/lulu` pages.
- Keep components small and colocated with where they're used.
- No unnecessary comments — code should be self-explanatory.

## Checks

```
npm run lint
npm run build
```

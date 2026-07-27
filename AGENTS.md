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
- When translating visual-editor style edits into code, snap spacing values
  to the nearest step in `luluSpacing` (`ecommerce/src/lulu/tokens.ts`)
  rather than emitting Tailwind arbitrary-value classes (e.g. `pt-[42px]`)
  for raw pixel diffs.
- Keep components small and colocated with where they're used.
- No unnecessary comments — code should be self-explanatory.

## Checks

```
npm run lint
npm run build
```

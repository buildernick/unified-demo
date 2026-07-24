# Add Storybook scoped to the Lulu design system

## Goal
Add Storybook to the `ecommerce` app, showing **only** the Lulu design system:
- Components in `src/lulu/components/*`
- Typography (Lulu type scale)
- Design tokens (colors, spacing, radii) from `src/lulu/tokens.ts`

Nothing else in the app (shadcn/ui primitives, Radix wrappers, Builder.io blocks, checkout/cart pages, etc.) gets stories or gets swept in by the config.

## Why this approach
- The app is Next.js 14 (App Router) + TypeScript + Tailwind 3.4, using `next/image` and `next/link` inside Lulu components (e.g. `LuluProductCard`, `LuluCategoryCard`, `LuluHeader`, `LuluButton`). The official `@storybook/nextjs` framework package handles these automatically (mocks `next/link`, `next/navigation`, resolves `next/image` incl. remote patterns from `next.config.mjs`) and reuses the project's existing PostCSS/Tailwind config, so no extra build wiring is needed for `lulu-*` utility classes.
- Rather than running `npx storybook init` (which auto-scans the whole repo and would default to scanning every folder for stories), we hand-write a minimal config so the `stories` glob only ever points at `src/lulu/**`. This guarantees the scoping the user asked for and avoids accidentally documenting unrelated UI.
- Lulu pages rely on a `.lulu-theme` CSS-variable scope (`app/lulu/lulu-theme.css`) and Tailwind's `globals.css` for base styles — both need to be loaded in Storybook's preview so components render pixel-identical to `/lulu/components` and `/lulu/style-guide`.

## Setup steps

1. **Install dependencies** (devDependencies, npm since the project uses `package-lock.json`):
   - `storybook`
   - `@storybook/nextjs`
   - `@storybook/react`
   - `@storybook/addon-essentials` (controls, docs, viewport, backgrounds, actions)

2. **`ecommerce/.storybook/main.ts`**
   - `framework: '@storybook/nextjs'`
   - `stories: ['../src/lulu/**/*.stories.@(ts|tsx)']` — scoped only to Lulu.
   - `addons: ['@storybook/addon-essentials']`
   - `staticDirs: ['../public']`

3. **`ecommerce/.storybook/preview.tsx`**
   - Import `../app/globals.css` and `../app/lulu/lulu-theme.css`.
   - Global decorator wraps every story in `<div className="lulu-theme lulu-page">` so `--lulu-*` CSS variables and the canvas background/typography match production exactly.
   - Set default background to the Lulu canvas color (`#FAFAFA`).

4. **npm scripts** in `ecommerce/package.json`:
   - `"storybook": "storybook dev -p 6006"`
   - `"build-storybook": "storybook build"`

5. **Component stories** — one `ComponentName.stories.tsx` colocated in `src/lulu/components/`, mirroring the real usage already shown on `/lulu/components` and reusing `src/lulu/sample-data.ts` for realistic content:
   - `LuluButton` — primary + secondary variants
   - `LuluText` — lg/md/sm sizes × ink/stone tones
   - `LuluHeadline` — xl/lg/md/sm sizes
   - `LuluSectionHeading`
   - `LuluCategoryTitle`
   - `LuluCategoryCard` — using sample categories
   - `LuluProductCard` — using sample products
   - `LuluProductCarousel` — static sample items (the presentational carousel)
   - `LuluHero`
   - `LuluVideoCard` — `fitHeight` and `pictureBox` variants
   - `LuluHlsVideoCard`
   - `LuluVideoPlayer`
   - `LuluImagePlaceholder`
   - `LuluLogo`
   - `LuluHeader`
   - `LuluFooter` (CTA banner) and `LuluSiteFooter` (full site footer) — documented as two distinct components since they're separate files with different purposes

   Note: `LuluCarousel` (the Builder.io CMS-backed wrapper that fetches a live product collection) is intentionally **not** given its own story — it depends on `NEXT_PUBLIC_BUILDER_API_KEY` and a network call to Builder's CDN, and renders nothing until that resolves. Its presentational half, `LuluProductCarousel`, is documented instead with static data so the story is deterministic offline.

6. **Tokens & typography story** — new `src/lulu/tokens.stories.tsx`, a single docs-style story (title `Lulu/Tokens`) that renders swatches/specimens computed live from `luluColors`, `luluTypeScale`, and `luluSpacing` in `tokens.ts` (same content as `/lulu/style-guide`, so it can never drift from the real values).

7. **Sidebar organization** via CSF `title` fields: `Lulu/Tokens`, `Lulu/Typography` (can live in the same tokens story or split out), `Lulu/Components/<Name>` for every component story above.

## Known caveats (to call out, not fix)
- Saans/Calibre fonts aren't hosted (per the comment in `tokens.ts`), so Storybook will show the same Helvetica/Roboto fallback the live site already uses — expected, not a Storybook bug.
- `LuluCarousel`'s Builder CMS data fetching won't work offline/without the API key; addressed by documenting `LuluProductCarousel` instead (see above).

## Files to add/change
- `ecommerce/package.json` — devDependencies + `storybook`/`build-storybook` scripts
- `ecommerce/.storybook/main.ts` (new)
- `ecommerce/.storybook/preview.tsx` (new)
- `ecommerce/src/lulu/components/*.stories.tsx` (new, one per component listed above)
- `ecommerce/src/lulu/tokens.stories.tsx` (new)

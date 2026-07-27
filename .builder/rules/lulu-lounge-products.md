# Lulu Products Data Model (`/lulu/lounge`)

Scope: `ecommerce/app/lulu/lounge/page.tsx` and any component it renders
(`LuluProductCarousel`, etc.). Applies whenever reading/writing product data
for the lounge page's "Fit for all-day versatility" carousel.

## Contentful content type: `luluProduct`

Fetched via `getLuluProductsByCollection(collection)` in
`ecommerce/lib/contentful/api.ts`, which queries entries where
`fields.collection` equals the given collection (e.g. `"Scuba"`,
`"Steady State"`).

Fields on each entry (see `LuluProductEntry` type in `api.ts`):

- `name` (string) — product display name, also used as the lookup key into
  the `PRODUCT_HREFS` map in `page.tsx` to get the external
  `shop.lululemon.com` PDP link. Product names must match exactly between
  Contentful and `PRODUCT_HREFS`, or the card link falls back to `"#"`.
- `price` (string) — pre-formatted display price, e.g. `"$138"`. Not a
  number; strip non-numeric characters (see `parsePrice` in
  `LuluProductCarousel.tsx`) before using it in cart/math logic.
- `image1`, `image2`, `image3` (string URLs, optional) — only `image1` is
  currently used on the lounge page carousel. Entries without `image1` are
  filtered out in `toCarouselItems`.
- `availableSizes` (string array, optional) — the sizes actually in stock
  for that product. Values are full words: `"Small"`, `"Medium"`, `"Large"`.
  **Not every product has all three** — some only have two (e.g.
  `["Small", "Large"]`). Never assume a fixed S/M/L set; always render only
  what's present in this array.
- `collection` (string) — groups products for a given page/section (e.g.
  `"Scuba"` is what the lounge page's versatility carousel queries for).

## UI mapping

- `page.tsx`'s `toCarouselItems()` maps Contentful entries to
  `LuluProductCarouselItem` (`title`, `price`, `href`, `image`, `sizes`).
- `LuluProductCarousel.tsx` abbreviates full size words to single letters
  for display (`SIZE_ABBREVIATIONS`: Small → S, Medium → M, Large → L) and
  only renders a size button for sizes present in `product.sizes`.

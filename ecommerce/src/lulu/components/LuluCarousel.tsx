"use client";

import { useEffect, useState } from "react";
import {
  LuluProductCarousel,
  type LuluProductCarouselItem,
} from "@/src/lulu/components/LuluProductCarousel";

export type LuluCarouselMode = "collection" | "products";
export type LuluCollectionName = "Scuba" | "Steady State" | "Softstreme";

type LuluProductData = {
  name?: string;
  price?: string;
  image1?: string;
};

export type LuluProductReference = {
  id?: string;
  data?: LuluProductData;
  value?: { id?: string; data?: LuluProductData };
};

export type LuluCarouselProps = {
  mode?: LuluCarouselMode;
  collection?: LuluCollectionName;
  products?: { product?: LuluProductReference }[];
  ctaLabel?: string;
  ctaHref?: string;
};

function toItem(
  id: string | undefined,
  data: LuluProductData | undefined
): LuluProductCarouselItem | null {
  if (!id || !data?.name || !data?.image1) return null;
  return {
    title: data.name,
    price: data.price || "",
    image: data.image1,
    href: `https://shop.lululemon.com/search?Ntt=${encodeURIComponent(data.name)}`,
  };
}

export function LuluCarousel({
  mode = "collection",
  collection = "Scuba",
  products = [],
  ctaLabel = "Shop now",
  ctaHref = "/lulu/products",
}: LuluCarouselProps) {
  const [items, setItems] = useState<LuluProductCarouselItem[]>([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
    if (!apiKey) return;

    let cancelled = false;

    async function load() {
      if (mode === "products") {
        const resolved = await Promise.all(
          products.map(async (entry) => {
            const ref = entry.product;
            const inlineData = ref?.data || ref?.value?.data;
            const id = ref?.id || ref?.value?.id;
            if (inlineData) return toItem(id, inlineData);
            if (!id) return null;

            const res = await fetch(
              `https://cdn.builder.io/api/v3/content/lulu-product/${id}?apiKey=${apiKey}&cachebust=true`
            );
            if (!res.ok) return null;
            const json = await res.json();
            return toItem(json.id, json.data);
          })
        );
        if (!cancelled) {
          setItems(
            resolved.filter((item): item is LuluProductCarouselItem =>
              Boolean(item)
            )
          );
        }
        return;
      }

      const res = await fetch(
        `https://cdn.builder.io/api/v3/content/lulu-product?apiKey=${apiKey}&query.data.collection=${encodeURIComponent(
          collection
        )}&limit=20&cachebust=true`
      );
      if (!res.ok) return;
      const json = await res.json();
      const resolved = (json.results || [])
        .map((entry: { id: string; data: LuluProductData }) =>
          toItem(entry.id, entry.data)
        )
        .filter((item: LuluProductCarouselItem | null): item is LuluProductCarouselItem =>
          Boolean(item)
        );
      if (!cancelled) setItems(resolved);
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, collection, JSON.stringify(products)]);

  if (items.length === 0) return null;

  return (
    <LuluProductCarousel products={items} ctaLabel={ctaLabel} ctaHref={ctaHref} />
  );
}

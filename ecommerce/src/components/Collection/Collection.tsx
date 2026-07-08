"use client";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../Card/ProductCard";

const collectionAliases: Record<string, string> = {
  accessories: "accessories",
  handbags: "handbags",
  men: "men",
  women: "women",
  "womens-eyewear": "accessories",
};

function normalizeCollection(collection?: string) {
  const normalizedCollection = collection?.toLowerCase();

  if (!normalizedCollection || normalizedCollection === "all" || normalizedCollection === "featured") {
    return "all";
  }

  return collectionAliases[normalizedCollection] ?? "all";
}

export function useCollectionProducts(rawCollection?: string) {
  const collection = normalizeCollection(rawCollection);

  return useQuery<any[]>({
    queryKey: ["products", collection],
    retry: false,
    queryFn: async () => {
      try {
        const pageSize = 100;
        let offset = 0;
        let builderProducts: any[] = [];
        let page: any[] = [];

        do {
          const params = new URLSearchParams({
            apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "",
            includeRefs: "true",
            fields: "data",
            limit: String(pageSize),
            offset: String(offset),
          });
          const response = await fetch(
            `https://cdn.builder.io/api/v3/content/product-data?${params}`
          );
          if (!response.ok) return [];

          page = (await response.json()).results ?? [];
          builderProducts = builderProducts.concat(page);
          offset += pageSize;
        } while (page.length === pageSize);

        if (collection === "all") {
          return builderProducts;
        }

        return builderProducts.filter((product: any) => {
          const category = product?.data?.category?.toLowerCase();
          const subCategory = product?.data?.subCategory?.toLowerCase();

          return category === collection || subCategory === collection;
        });
      } catch {
        return [];
      }
    },
  });
}

function ScrollRail({ items }: { items: any[] }) {
  return (
    <div className="flex flex-row overflow-auto gap-6 min-h-96">
      {items.map((product, index) => (
        <ProductCard
          classes="w-[200px] shrink-0"
          key={`${product.id}-${index}`}
          dataSource="Builder"
          product={product}
        />
      ))}
    </div>
  );
}

function CarouselRail({ items, showDots }: { items: any[]; showDots: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;

    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const handlePrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const handleNext = () => scrollToIndex(Math.min(activeIndex + 1, items.length - 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const closestIndex = cards.reduce((closest, card, index) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
        const closestDistance = Math.abs(cards[closest].offsetLeft - track.scrollLeft);
        return distance < closestDistance ? index : closest;
      }, 0);
      setActiveIndex(closestIndex);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous product"
        onClick={handlePrev}
        disabled={activeIndex === 0}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        className="no-scrollbar flex flex-row overflow-auto scroll-smooth snap-x snap-mandatory gap-6 min-h-96"
      >
        {items.map((product, index) => (
          <div key={`${product.id}-${index}`} className="snap-start">
            <ProductCard
              classes="w-[200px] shrink-0"
              dataSource="Builder"
              product={product}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next product"
        onClick={handleNext}
        disabled={activeIndex >= items.length - 1}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {showDots && items.length > 0 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to product ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-zinc-900" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Collection(props: {
  collection: string;
  variant?: "scroll" | "carousel";
  showDots?: boolean;
}) {
  const { variant = "scroll", showDots = true } = props;
  const products = useCollectionProducts(props.collection);
  const items = products.data ?? [];

  if (variant === "carousel") {
    return <CarouselRail items={items} showDots={showDots} />;
  }

  return <ScrollRail items={items} />;
}

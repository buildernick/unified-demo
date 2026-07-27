"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { LuluButton } from "@/src/lulu/components/LuluButton";
import { useCart } from "@/src/context/CartContext";

export type LuluProductCarouselItem = {
  title: string;
  price: string;
  href: string;
  image: string;
  sizes?: string[];
};

const SIZE_ABBREVIATIONS: Record<string, string> = {
  Small: "S",
  Medium: "M",
  Large: "L",
};

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

type LuluProductCarouselProps = {
  products: LuluProductCarouselItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function LuluProductCarousel({
  products,
  ctaLabel,
  ctaHref,
}: LuluProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const [addedKey, setAddedKey] = useState<string | null>(null);

  const handleAddToCart = (product: LuluProductCarouselItem, size: string) => {
    const key = `${product.href}-${size}`;
    addToCart({
      id: key,
      handle: product.href,
      productName: product.title,
      price: parsePrice(product.price),
      image: product.image,
      selectedColor: null,
      selectedSize: size,
    });
    setAddedKey(key);
    setTimeout(() => setAddedKey((current) => (current === key ? null : current)), 1500);
  };

  const scroll = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = card ? card.offsetWidth + 32 : el.clientWidth / 2;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product, index) => (
          <a
            key={index}
            data-carousel-card
            href={product.href}
            className="group flex w-[calc(50%-16px)] shrink-0 flex-col md:w-[calc(25%-24px)]"
          >
            <div className="relative aspect-[5/6] w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
              {!!product.sizes?.length && (
                <div className="absolute inset-0 flex items-end justify-center gap-2 bg-lulu-ink/0 pb-6 opacity-0 transition-opacity duration-200 group-hover:bg-lulu-ink/20 group-hover:opacity-100">
                  {product.sizes.map((size) => {
                    const key = `${product.href}-${size}`;
                    const isAdded = addedKey === key;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          handleAddToCart(product, size);
                        }}
                        aria-label={`Add ${product.title}, size ${size}, to bag`}
                        className="flex h-10 w-10 items-center justify-center border border-white font-lulu-display text-lulu-body-sm text-white transition-colors hover:bg-white hover:text-lulu-ink"
                      >
                        {isAdded ? "✓" : SIZE_ABBREVIATIONS[size] ?? size.charAt(0)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <p className="mt-3 font-lulu-display text-lulu-product-title text-lulu-ink">
              {product.title}
            </p>
            <p className="mt-1 font-lulu-display text-lulu-body-md text-lulu-ink">
              {product.price}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <LuluButton href={ctaHref}>{ctaLabel}</LuluButton>

        <div className="flex items-center rounded-full border border-lulu-ink p-1">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="flex h-8 w-8 items-center justify-center rounded-full text-lulu-ink transition-colors hover:bg-lulu-ink/5"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              aria-hidden="true"
            >
              <path
                d="M19.5 12h-15m0 0 5.625-6M4.5 12l5.625 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next"
            className="flex h-8 w-8 items-center justify-center rounded-full text-lulu-ink transition-colors hover:bg-lulu-ink/5"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              aria-hidden="true"
            >
              <path
                d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

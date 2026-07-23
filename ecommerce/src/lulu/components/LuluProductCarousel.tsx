"use client";

import { useRef } from "react";
import Image from "next/image";
import { LuluButton } from "@/src/lulu/components/LuluButton";

export type LuluProductCarouselItem = {
  title: string;
  price: string;
  href: string;
  image: string;
};

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
            className="flex w-[calc(50%-16px)] shrink-0 flex-col md:w-[calc(25%-24px)]"
          >
            <div className="relative aspect-[5/6] w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
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

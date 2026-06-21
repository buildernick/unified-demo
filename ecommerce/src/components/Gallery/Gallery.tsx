/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  span: string;
};

const items: GalleryItem[] = [
  {
    id: "1",
    title: "Essential Accessories",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-2",
  },
  {
    id: "2",
    title: "Tailored Layers",
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "3",
    title: "Soft Knits",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "4",
    title: "Studio Edit",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-2",
  },
  {
    id: "5",
    title: "Everyday Carry",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "6",
    title: "Urban Uniform",
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "7",
    title: "Summer Sale",
    category: "Sale",
    image:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2",
  },
  {
    id: "8",
    title: "Minimal Footwear",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "9",
    title: "The Denim Story",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-2",
  },
  {
    id: "10",
    title: "Cold Weather",
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "11",
    title: "Off Duty",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    id: "12",
    title: "Final Markdowns",
    category: "Sale",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
];

const categories = ["All", "Women", "Men", "Accessories", "Sale"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="flex flex-col mt-4 mb-12">
      <div className="flex flex-col items-center text-center mb-8">
        <p className="text-sm uppercase tracking-[3px] text-zinc-500">
          Lookbook
        </p>
        <h1 className="text-3xl md:text-4xl uppercase tracking-[6px] mt-2">
          Gallery
        </h1>
        <p className="max-w-xl mt-4 text-sm text-zinc-500">
          A curated edit of the season&apos;s essentials. Explore the looks and
          shop the pieces that define the collection.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 text-xs uppercase tracking-[2px] rounded-full border transition-colors ${
              activeCategory === category
                ? "bg-black text-white border-black"
                : "bg-transparent text-zinc-600 border-zinc-300 hover:border-zinc-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className={`group relative overflow-hidden rounded-md bg-zinc-100 text-left ${item.span}`}
          >
            <img
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-start">
              <span
                className={`text-[10px] uppercase tracking-[2px] ${
                  item.category === "Sale" ? "text-rose-400" : "text-white/80"
                }`}
              >
                {item.category}
              </span>
              <span className="text-white text-sm md:text-base uppercase tracking-[2px]">
                {item.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-black hover:bg-white"
            >
              ✕
            </button>
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="object-cover w-full max-h-[70vh]"
            />
            <div className="flex items-center justify-between p-5">
              <div className="flex flex-col">
                <span
                  className={`text-[10px] uppercase tracking-[2px] ${
                    activeItem.category === "Sale"
                      ? "text-rose-500"
                      : "text-zinc-500"
                  }`}
                >
                  {activeItem.category}
                </span>
                <span className="text-lg uppercase tracking-[3px]">
                  {activeItem.title}
                </span>
              </div>
              <a
                href={`/category/${activeItem.category.toLowerCase()}`}
                className="text-xs uppercase tracking-[2px] border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

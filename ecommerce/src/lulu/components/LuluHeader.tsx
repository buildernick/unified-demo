"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Puzzle, Search, ShoppingBag, Type, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LuluLogo } from "@/src/lulu/components/LuluLogo";

const primaryLinks = [
  { label: "Women", href: "/lulu" },
  { label: "Men", href: "/lulu/products" },
  { label: "Accessories", href: "/lulu/products" },
  { label: "Bags", href: "/lulu/products" },
  { label: "What's New", href: "/lulu/products" },
  { label: "We Made Too Much", href: "/lulu/story" },
];

export function LuluHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="lulu-theme sticky top-0 z-[105] border-b border-lulu-line bg-lulu-canvas font-lulu-display">
      <nav aria-label="Main Navigation" className="bg-lulu-surface">
        <div className="mx-auto grid max-w-[1560px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-2 md:px-10">
          <Link href="/" className="flex items-center text-lulu-ink" aria-label="lululemon home">
            <LuluLogo className="h-6 w-auto" />
          </Link>

          <ul className="hidden items-end justify-self-center md:flex md:gap-6">
            {primaryLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lulu-body-sm font-semibold text-lulu-ink transition-opacity hover:opacity-60",
                    link.label === "We Made Too Much" && "text-lulu-accent"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-self-end gap-1">
            <Link
              href="/lulu/components"
              aria-label="Lulu component gallery"
              title="Lulu component gallery"
              className="rounded-full p-1.5 text-lulu-stone transition-opacity hover:opacity-60"
            >
              <Puzzle className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              href="/lulu/style-guide#type-scale"
              aria-label="Lulu typography gallery"
              title="Lulu typography gallery"
              className="rounded-full p-1.5 text-lulu-stone transition-opacity hover:opacity-60"
            >
              <Type className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <div className="relative hidden md:block">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lulu-ink"
              />
              <input
                type="search"
                placeholder="Search"
                className="h-9 w-48 rounded-lulu-pill border border-lulu-line bg-lulu-surface pl-9 pr-4 text-lulu-body-sm text-lulu-ink placeholder:text-lulu-ink/50 focus:outline-none"
              />
            </div>
            <Link
              href="/cart"
              aria-label="My bag"
              className="rounded-full p-2 text-lulu-ink transition-opacity hover:opacity-60"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden />
            </Link>
            <span
              aria-label="My Account"
              className="hidden cursor-default rounded-full p-2 text-lulu-ink md:inline-flex"
            >
              <User className="h-4 w-4" aria-hidden />
            </span>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="rounded-full p-2 text-lulu-ink md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <Menu className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <ul className="flex flex-col gap-1 border-t border-lulu-line bg-lulu-surface px-6 py-4 md:hidden">
            {primaryLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-lulu-body-sm font-semibold text-lulu-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

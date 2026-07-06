/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/src/components/ui/navigation-menu"
import { AuthSlider } from "./AuthSlider"
import { CartSlider } from "./CartSlider"
import { SideNav } from "./SideNav"
import { BuilderContent } from '@builder.io/react';


export function Header({ headerContent }: any) {
  const pathname = usePathname();
  if (pathname?.startsWith("/dd")) return null;

  return (
    <BuilderContent model="header-links" content={headerContent}>
      {(data) => {
        return (
        <header className="w-full flex flex-1 border-y mb-4">
          <div className="px-4 p-3 flex justify-between container">

            <NavigationMenuItem className="flex md:hidden">
              <SideNav />
            </NavigationMenuItem>
            <Button variant="link" asChild>
              <Link href="/" passHref>
                <img
                  className="h-6"
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F692369ff646645349e68a86b43fc7a38"
                  alt="Builder.io Logo"
                  loading="lazy"
                />
              </Link>
            </Button>
            <NavigationMenu className="hidden md:flex space-x-5">
              <NavigationMenuList className="justify-around w-full">
                {data?.headerLinks?.map((item: any, index: number) => {
                  return (
                    <Button key={index} variant="link" className="text-md">
                      <Link href={item.path || '/'} legacyBehavior passHref >
                        {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
                        <span className={`uppercase ${item.highlight ? "text-rose-500" : ""}`}>{item.label}</span>
                        {/* </NavigationMenuLink> */}
                      </Link>
                    </Button>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-1">
              <Link
                href="/gallery"
                title="Component Gallery"
                className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4h3.5V2.5a1.5 1.5 0 0 1 3 0V4H16a2 2 0 0 1 2 2v3.5h1.5a1.5 1.5 0 0 1 0 3H18V16a2 2 0 0 1-2 2h-3.5v1.5a1.5 1.5 0 0 1-3 0V18H6a2 2 0 0 1-2-2v-3.5H2.5a1.5 1.5 0 0 1 0-3H4V6a2 2 0 0 1 2-2z" />
                </svg>
              </Link>
              <Link
                href="/doordash"
                title="DoorDash Design System"
                className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" stroke="none" />
                </svg>
              </Link>
              <CartSlider variant="black" />
              <AuthSlider variant="black" />
            </div>
          </div>
        </header>
      )}
      }
    </BuilderContent>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-light leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

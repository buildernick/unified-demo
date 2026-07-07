"use client";

import { usePathname } from "next/navigation";
import { RenderBuilderContent } from "@/src/components/builder";

export function SiteBanner({ content }: { content: any }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/dd") || pathname?.startsWith("/doordash")) return null;

  return <RenderBuilderContent model="banner" content={content} data={{ username: "superUser123" }} />;
}

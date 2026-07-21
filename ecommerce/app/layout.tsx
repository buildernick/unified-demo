import { builder } from "@builder.io/sdk";
import "./globals.css";
import QueryProvider from "@/src/components/QueryProvider";
import { CartProvider } from "@/src/context/CartContext";
import { LuluHeader } from "@/src/lulu/components/LuluHeader";
import { LuluSiteFooter } from "@/src/lulu/components/LuluSiteFooter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <CartProvider>
            <main>
              <LuluHeader />
              <div className="container">{children}</div>
              <LuluSiteFooter />
            </main>
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

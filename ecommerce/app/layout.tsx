import { builder } from "@builder.io/sdk";
import { Header } from "@/src/components/Layout/Header";
import "./globals.css";
import Footer from "@/src/components/Layout/Footer";
import { RenderBuilderContent } from "@/src/components/builder";
import QueryProvider from "@/src/components/QueryProvider";
import { CartProvider } from "@/src/context/CartContext";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en-US";

  const [headerContent, bannerContent] = await Promise.all([
    builder
      .get("header-links", {
        fields: "data",
        options: { locale },
        cachebust: true,
        fetchOptions: { cache: "no-store" },
      })
      .toPromise()
      .catch(() => null),
    builder
      .get("banner", {
        userAttributes: { loggedIn: true },
        options: { locale },
        cachebust: true,
        fetchOptions: { cache: "no-store" },
      })
      .toPromise()
      .catch(() => null),
  ]);

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <CartProvider>
            <main>
              {bannerContent && <RenderBuilderContent model="banner" content={bannerContent} data={{username: "superUser123"}} />}
              <Header headerContent={headerContent} />
              <div className="container">{children}</div>
              <Footer />
            </main>
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

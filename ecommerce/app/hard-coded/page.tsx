import Link from "next/link";
import ImageHero from "@/src/components/Hero/ImageHero";
import TextHero from "@/src/components/Hero/TextHero";
import SplitHero from "@/src/components/Hero/SplitHero";
import IconCard from "@/src/components/Card/IconCard";
import { Button } from "@/src/components/ui/button";
import FeaturedCollection from "./FeaturedCollection";
import FeaturedProducts from "./FeaturedProducts";

export const dynamic = "force-dynamic";

const FEATURED_PRODUCT_IDS = [
  "63f2ce2bdfab4e1fa0343b7d8a43d1d9_2c11267fe5494608b2e4c9279f8bef72",
  "63f2ce2bdfab4e1fa0343b7d8a43d1d9_088c35a5a6914ac68b99a4ea12abba6a",
  "63f2ce2bdfab4e1fa0343b7d8a43d1d9_9685fb6b141741a8914c3db2fbb4929d",
];

const WHATS_DIFFERENT_FEATURES = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F425c867d31d142e5b5435c6c325e8fc8?width=91",
    altText: "2-Day Shipping",
    title: "2-Day Shipping",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.</p>",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fa6b9b54b817a4350b286bb6daebbad80?width=91",
    altText: "Carbon Neutral",
    title: "Carbon Neutral",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.</p>",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Ffa84a9809e474a30b71b2aeabb2cb500?width=91",
    altText: "Advanced Dye Tech",
    title: "Advanced Dye Tech",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum.</p>",
  },
];

async function getFeaturedProducts() {
  const products = await Promise.all(
    FEATURED_PRODUCT_IDS.map(async (id) => {
      const params = new URLSearchParams({
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "",
        "query.id": id,
        limit: "1",
      });
      const response = await fetch(
        `https://cdn.builder.io/api/v3/content/product-data?${params}`,
        { cache: "no-store" }
      );
      if (!response.ok) return null;
      const json = await response.json();
      return json.results?.[0] ?? null;
    })
  );
  return products.filter(Boolean);
}

export default async function HardCodedPage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col overflow-hidden bg-white items-stretch justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto">
        <ImageHero
          title="ESSENTIAL ACCESSORIES"
          buttonText="Shop Now"
          buttonLink="#"
          backgroundImage="https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fe142f1995377427894ebe1d9be635214"
          alignment="right"
          makeFullBleed={false}
        />

        <div className="mt-[50px] w-full">
          <TextHero title="STEP INTO FRESH STYLES" />
        </div>

        <div className="mt-[50px] w-full">
          <FeaturedCollection />
        </div>

        <div className="mt-[50px] w-full">
          <SplitHero
            imageAlignment="right"
            textAlignment="left"
            splitWidth="1/3"
            title="OUR COMMITMENT TO SUSTAINABILITY"
            subTitle="At Shopaholic, we believe fashion can be both stylish and eco-friendly. That&rsquo;s why we craft our clothing using sustainable materials like organic cotton, recycled fibers, and eco-friendly dyes. Our jeans are designed with the planet in mind&mdash;using water-saving technologies and ethical manufacturing processes."
            image="https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Ff0f111654b4c46cb9e3e841a68bbecb1"
            altText="Jeans image"
            hasCTA
            buttonText="VISIT US IN STORE"
            buttonLink="/stores"
            makeFullBleed={false}
          />
        </div>

        <div className="flex flex-col mt-[50px] min-h-[655px] w-full max-w-[1200px] items-center justify-between">
          <TextHero title="SHOP OUR FAVORITES" />
          <FeaturedProducts products={featuredProducts} />
          <Button asChild variant="default" className="self-stretch mt-10">
            <Link href="/stores">SHOP OUR RETAIL STORES</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center p-20 mt-[50px] w-full bg-background text-foreground max-md:px-5">
        <h2 className="mt-6 text-2xl text-center text-foreground tracking-[5.25px] max-md:max-w-full font-medium">
          WHAT&apos;S DIFFERENT ABOUT SHOPAHOLIC
        </h2>
        <div className="flex mt-[53px] min-h-[268px] items-start gap-x-[100px] gap-y-10 w-full flex-wrap justify-center">
          {WHATS_DIFFERENT_FEATURES.map((feature) => (
            <IconCard
              key={feature.title}
              icon={feature.icon}
              altText={feature.altText}
              title={feature.title}
              description={feature.description}
              alignment="center"
              coloredBackground={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

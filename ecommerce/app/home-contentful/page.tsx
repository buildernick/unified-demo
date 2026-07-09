import Link from "next/link";
import ImageHero from "@/src/components/Hero/ImageHero";
import TextHero from "@/src/components/Hero/TextHero";
import SplitHero from "@/src/components/Hero/SplitHero";
import IconCard from "@/src/components/Card/IconCard";
import { Button } from "@/src/components/ui/button";
import FeaturedCollection from "./FeaturedCollection";
import FeaturedProducts from "./FeaturedProducts";
import { getShopHeroes, getShopFeaturedProducts, getShopIconFeatures } from "@/lib/contentful/api";

export const dynamic = "force-dynamic";

export default async function HomeContentfulPage() {
  const [heroes, products, iconFeatures] = await Promise.all([
    getShopHeroes(),
    getShopFeaturedProducts(),
    getShopIconFeatures(),
  ]);

  const heroByOrder = (order: number) => heroes.find((hero: any) => hero.order === order);
  const imageHero = heroByOrder(1);
  const stepIntoHero = heroByOrder(2);
  const splitHero = heroByOrder(3);
  const shopFavoritesHero = heroByOrder(4);
  const sectionHeader = iconFeatures[0]?.sectionHeader ?? "";

  return (
    <div className="flex flex-col overflow-hidden bg-white items-stretch justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto">
        {imageHero && (
          <ImageHero
            title={imageHero.title}
            subTitle={imageHero.subtitle}
            buttonText={imageHero.buttonText}
            buttonLink={imageHero.buttonLink}
            backgroundImage={imageHero.backgroundImage}
            alignment={imageHero.alignment ?? "center"}
            makeFullBleed={!!imageHero.makeFullBleed}
          />
        )}

        {stepIntoHero && (
          <div className="mt-[50px] w-full">
            <TextHero title={stepIntoHero.title} subTitle={stepIntoHero.subtitle} />
          </div>
        )}

        <div className="mt-[50px] w-full">
          <FeaturedCollection />
        </div>

        {splitHero && (
          <div className="mt-[50px] w-full">
            <SplitHero
              imageAlignment={splitHero.imageAlignment ?? "right"}
              textAlignment={splitHero.textAlignment ?? "left"}
              splitWidth={splitHero.splitWidth ?? "1/2"}
              title={splitHero.title}
              subTitle={splitHero.subtitle}
              image={splitHero.backgroundImage}
              altText={splitHero.altText ?? ""}
              hasCTA={!!splitHero.hasCta}
              buttonText={splitHero.buttonText}
              buttonLink={splitHero.buttonLink}
              makeFullBleed={!!splitHero.makeFullBleed}
            />
          </div>
        )}

        <div className="flex flex-col mt-[50px] min-h-[655px] w-full max-w-[1200px] items-center justify-between">
          {shopFavoritesHero && (
            <TextHero title={shopFavoritesHero.title} subTitle={shopFavoritesHero.subtitle} />
          )}
          <FeaturedProducts products={products} />
          <Button asChild variant="default" className="self-stretch mt-10">
            <Link href="/stores">SHOP OUR RETAIL STORES</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center p-20 mt-[50px] w-full bg-background text-foreground max-md:px-5">
        <h2 className="mt-6 text-2xl text-center text-foreground tracking-[5.25px] max-md:max-w-full font-medium">
          {sectionHeader}
        </h2>
        <div className="flex mt-[53px] min-h-[268px] items-start gap-x-[100px] gap-y-10 w-full flex-wrap justify-center">
          {iconFeatures.map((feature: any) => (
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

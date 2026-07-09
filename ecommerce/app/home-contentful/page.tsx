import Link from "next/link";
import ImageHero from "@/src/components/Hero/ImageHero";
import TextHero from "@/src/components/Hero/TextHero";
import SplitHero from "@/src/components/Hero/SplitHero";
import IconCard from "@/src/components/Card/IconCard";
import { Button } from "@/src/components/ui/button";
import FeaturedCollection from "./FeaturedCollection";
import FeaturedProducts from "./FeaturedProducts";
import { getShopHomeSections } from "@/lib/contentful/api";

export const dynamic = "force-dynamic";

export default async function HomeContentfulPage() {
  const sections = await getShopHomeSections();
  const firstTextHeroIndex = sections.findIndex((section: any) => section.type === "textHero");

  return (
    <div className="flex flex-col overflow-hidden bg-white items-stretch justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto">
        {sections.map((section: any, index: number) => (
          <div key={`${section.type}-${section.order}`} className="w-full contents">
            {section.type === "imageHero" && (
              <ImageHero
                title={section.title}
                subTitle={section.subtitle}
                buttonText={section.buttonText}
                buttonLink={section.buttonLink}
                backgroundImage={section.backgroundImage}
                alignment={section.alignment ?? "center"}
                makeFullBleed={!!section.makeFullBleed}
              />
            )}

            {section.type === "textHero" && (
              <div className="mt-[50px] w-full">
                <TextHero title={section.title} subTitle={section.subtitle} />
              </div>
            )}

            {section.type === "splitHero" && (
              <div className="mt-[50px] w-full">
                <SplitHero
                  imageAlignment={section.imageAlignment ?? "right"}
                  textAlignment={section.textAlignment ?? "left"}
                  splitWidth={section.splitWidth ?? "1/2"}
                  title={section.title}
                  subTitle={section.subtitle}
                  image={section.image}
                  altText={section.altText ?? ""}
                  hasCTA={!!section.hasCta}
                  buttonText={section.buttonText}
                  buttonLink={section.buttonLink}
                  makeFullBleed={!!section.makeFullBleed}
                />
              </div>
            )}

            {section.type === "productGrid" && (
              <div className="flex flex-col mt-[50px] min-h-[655px] w-full max-w-[1200px] items-center justify-between">
                <TextHero title={section.heading} />
                <FeaturedProducts products={section.products} />
                <Button asChild variant="default" className="self-stretch mt-10">
                  <Link href={section.ctaLink ?? "/"}>{section.ctaText}</Link>
                </Button>
              </div>
            )}

            {index === firstTextHeroIndex && (
              <div className="mt-[50px] w-full">
                <FeaturedCollection />
              </div>
            )}
          </div>
        ))}
      </div>

      {sections
        .filter((section: any) => section.type === "iconFeatureSection")
        .map((section: any) => (
          <div
            key={`iconFeatureSection-${section.order}`}
            className="flex flex-col justify-between items-center p-20 mt-[50px] w-full bg-background text-foreground max-md:px-5"
          >
            <h2 className="mt-6 text-2xl text-center text-foreground tracking-[5.25px] max-md:max-w-full font-medium">
              {section.header}
            </h2>
            <div className="flex mt-[53px] min-h-[268px] items-start gap-x-[100px] gap-y-10 w-full flex-wrap justify-center">
              {section.features.map((feature: any) => (
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
        ))}
    </div>
  );
}

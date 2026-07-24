import { LuluFooter } from "@/src/lulu/components/LuluFooter";
import { LuluHero } from "@/src/lulu/components/LuluHero";
import { LuluButton } from "@/src/lulu/components/LuluButton";
import { LuluProductCard } from "@/src/lulu/components/LuluProductCard";
import { LuluCategoryCard } from "@/src/lulu/components/LuluCategoryCard";
import { LuluHeadline } from "@/src/lulu/components/LuluHeadline";
import { LuluCategoryTitle } from "@/src/lulu/components/LuluCategoryTitle";
import { LuluText } from "@/src/lulu/components/LuluText";
import { LuluVideoCard } from "@/src/lulu/components/LuluVideoCard";
import { LuluHlsVideoCard } from "@/src/lulu/components/LuluHlsVideoCard";
import { LuluCarousel } from "@/src/lulu/components/LuluCarousel";
import { luluCategories, luluProducts } from "@/src/lulu/sample-data";

function GallerySection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-lulu-line px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1560px]">
        <LuluHeadline as="h2" size="md">
          {title}
        </LuluHeadline>
        {description && (
          <LuluText size="md" tone="stone" className="mt-3 max-w-2xl">
            {description}
          </LuluText>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function LuluComponentGalleryPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <LuluHeadline as="h1" size="lg">
            Lulu component gallery
          </LuluHeadline>
          <LuluText size="lg" className="mt-4 max-w-2xl">
            Every reusable building block extracted from the Lulu pages,
            defined once in <code className="text-lulu-body-md">src/lulu/components</code>{" "}
            and reused across the site.
          </LuluText>
        </div>
      </section>

      <GallerySection
        title="Hero"
        description="src/lulu/components/LuluHero.tsx — full-bleed image hero with headline, subcopy, and CTA."
      >
        <div className="overflow-hidden rounded-lulu-sm border border-lulu-line">
          <LuluHero
            image="https://images.lululemon.com/is/image/lululemon/NA_July26_Wk3_M_Train_Hero_Carousel_D_WhatsNew_MLP?wid=1600&fmt=webp&qlt=80"
            imageAlt="lululemon Metal Vent Tech Shirt"
            title={
              <>
                Lock in.
                <br />
                Level up.
              </>
            }
            subtitle="The seamless Metal Vent Tech Shirt lets you find your focus, then your limit."
            ctaLabel="Shop What's New"
            ctaHref="/lulu/products"
          />
        </div>
      </GallerySection>

      <GallerySection
        title="Product card"
        description="src/lulu/components/LuluProductCard.tsx — used in the What's New This Week rail and the products grid."
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {luluProducts.slice(0, 4).map((product) => (
            <LuluProductCard key={product.name} {...product} />
          ))}
        </div>
      </GallerySection>

      <GallerySection
        title="Category card"
        description="src/lulu/components/LuluCategoryCard.tsx — used in the Popular Categories grid."
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-4">
          {luluCategories.map((category) => (
            <LuluCategoryCard
              key={category.label}
              label={category.label}
              image={category.image}
              href="/lulu/products"
            />
          ))}
        </div>
      </GallerySection>

      <GallerySection
        title="Buttons"
        description="src/lulu/components/LuluButton.tsx — primary (filled) and secondary (outline) pill buttons."
      >
        <div className="flex flex-wrap items-center gap-6">
          <LuluButton href="/lulu/components">Primary button</LuluButton>
          <LuluButton href="/lulu/components" variant="secondary">
            Secondary button
          </LuluButton>
        </div>
      </GallerySection>

      <GallerySection
        title="Headline"
        description="src/lulu/components/LuluHeadline.tsx — polymorphic heading (xl/lg/md/sm) built on the display type scale."
      >
        <div className="flex flex-col gap-6">
          <LuluHeadline as="h2" size="xl">Lock in. Level up.</LuluHeadline>
          <LuluHeadline as="h2" size="lg">Lock in. Level up.</LuluHeadline>
          <LuluHeadline as="h3" size="md">Lock in. Level up.</LuluHeadline>
          <LuluHeadline as="h4" size="sm">Lock in. Level up.</LuluHeadline>
        </div>
      </GallerySection>

      <GallerySection
        title="Category title"
        description="src/lulu/components/LuluCategoryTitle.tsx — the label under each Popular Categories tile."
      >
        <LuluCategoryTitle>Shorts</LuluCategoryTitle>
      </GallerySection>

      <GallerySection
        title="Text"
        description="src/lulu/components/LuluText.tsx — polymorphic body copy (lg/md/sm) with ink or stone tone."
      >
        <div className="flex flex-col gap-3">
          <LuluText size="lg">Body LG in ink — for intros and lead paragraphs.</LuluText>
          <LuluText size="md">Body MD in ink — for standard copy.</LuluText>
          <LuluText size="sm" tone="stone">Body SM in stone — for captions and helper text.</LuluText>
        </div>
      </GallerySection>

      <GallerySection
        title="Video card"
        description="src/lulu/components/LuluVideoCard.tsx — vertical (3:5) looping YouTube video with an optional text overlay. Use the fit prop to crop the sides (fitHeight) or letterbox (pictureBox)."
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          <div>
            <LuluVideoCard
              youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              overlayText="Train harder"
              fit="fitHeight"
            />
            <LuluText size="sm" tone="stone" className="mt-2">
              fit=&quot;fitHeight&quot; (crops sides)
            </LuluText>
          </div>
          <div>
            <LuluVideoCard
              youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              overlayText="Train harder"
              fit="pictureBox"
            />
            <LuluText size="sm" tone="stone" className="mt-2">
              fit=&quot;pictureBox&quot; (letterboxed)
            </LuluText>
          </div>
        </div>
      </GallerySection>

      <GallerySection
        title="HLS video card"
        description="src/lulu/components/LuluHlsVideoCard.tsx — for direct .m3u8/.mp4 sources (e.g. lululemon's Scene7 CDN), played via hls.js instead of an embedded player."
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          <LuluHlsVideoCard
            videoUrl="https://s7mbrstream.scene7.com/hls-vod/lululemon/_media_/6cd/6cd2d16c-1614-4979-b11e-e4741e661207.mp4.m3u8"
            overlayText="Your unwind uniform."
          />
        </div>
      </GallerySection>

      <GallerySection
        title="Carousel"
        description="src/lulu/components/LuluCarousel.tsx — horizontal product carousel with prev/next controls and a CTA button. In Builder CMS it can show a whole Lulu Product collection (Scuba, Steady State, Softstreme) or a hand-picked list of Lulu Products."
      >
        <LuluCarousel
          mode="collection"
          collection="Scuba"
          ctaLabel="Shop Scuba"
          ctaHref="/lulu/products"
        />
      </GallerySection>

      <LuluFooter />
    </>
  );
}

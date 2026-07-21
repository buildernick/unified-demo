import { LuluFooter } from "@/src/lulu/components/LuluFooter";
import { LuluHero } from "@/src/lulu/components/LuluHero";
import { LuluSectionHeading } from "@/src/lulu/components/LuluSectionHeading";
import { LuluProductCard } from "@/src/lulu/components/LuluProductCard";
import { LuluCategoryCard } from "@/src/lulu/components/LuluCategoryCard";
import { luluCategories, luluProducts } from "@/src/lulu/sample-data";

export default function LuluHomePage() {
  return (
    <>
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

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <LuluSectionHeading className="mb-10">
            What&rsquo;s new this week?
          </LuluSectionHeading>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {luluProducts.slice(0, 4).map((product) => (
              <LuluProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lulu-surface px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <LuluSectionHeading className="mb-10">
            Popular categories
          </LuluSectionHeading>
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
        </div>
      </section>

      <LuluFooter />
    </>
  );
}

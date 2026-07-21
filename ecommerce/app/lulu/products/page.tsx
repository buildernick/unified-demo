import { LuluFooter } from "@/src/lulu/components/LuluFooter";
import { LuluProductCard } from "@/src/lulu/components/LuluProductCard";
import { luluProducts } from "@/src/lulu/sample-data";

const filters = ["All", "Shirts", "Shorts", "Pants", "Outerwear"];

export default function LuluProductsPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h1 className="font-lulu-display text-lulu-display-lg text-lulu-ink">
            Bestsellers, if we&rsquo;re playing favourites.
          </h1>

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <span
                key={filter}
                className={`rounded-lulu-pill border border-lulu-line px-4 py-2 font-lulu-display text-lulu-body-sm text-lulu-ink ${
                  index === 0 ? "bg-lulu-ink text-lulu-bone" : ""
                }`}
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {luluProducts.map((product) => (
              <LuluProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      <LuluFooter />
    </>
  );
}

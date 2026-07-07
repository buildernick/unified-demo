import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../Card/ProductCard";

const collectionAliases: Record<string, string> = {
  accessories: "accessories",
  handbags: "handbags",
  men: "men",
  women: "women",
  "womens-eyewear": "accessories",
};

function normalizeCollection(collection?: string) {
  const normalizedCollection = collection?.toLowerCase();

  if (!normalizedCollection || normalizedCollection === "all" || normalizedCollection === "featured") {
    return "all";
  }

  return collectionAliases[normalizedCollection] ?? "all";
}

export function Collection(props: {
  collection: string;
}) {
  const collection = normalizeCollection(props.collection);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const products = useQuery<any[]>({
    queryKey: ["products", collection],
    retry: false,
    queryFn: async () => {
      try {
        const pageSize = 100;
        let offset = 0;
        let builderProducts: any[] = [];
        let page: any[] = [];

        do {
          const params = new URLSearchParams({
            apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "",
            includeRefs: "true",
            fields: "data",
            limit: String(pageSize),
            offset: String(offset),
          });
          const response = await fetch(
            `https://cdn.builder.io/api/v3/content/product-data?${params}`
          );
          if (!response.ok) return [];

          page = (await response.json()).results ?? [];
          builderProducts = builderProducts.concat(page);
          offset += pageSize;
        } while (page.length === pageSize);

        if (collection === "all") {
          return builderProducts;
        }

        return builderProducts.filter((product: any) => {
          const category = product?.data?.category?.toLowerCase();
          const subCategory = product?.data?.subCategory?.toLowerCase();

          return category === collection || subCategory === collection;
        });
      } catch {
        return [];
      }
    },
  });

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByAmount("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-300 shadow-md hover:bg-zinc-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div
        ref={scrollRef}
        className="flex flex-row gap-6 min-h-96 overflow-x-hidden scroll-smooth px-12"
      >
        {products.data?.map((product, index) => (
          <ProductCard
            classes="w-[200px] shrink-0"
            key={`${product.id}-${index}`}
            dataSource="Builder"
            product={product}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByAmount("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-300 shadow-md hover:bg-zinc-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

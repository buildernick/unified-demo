import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Card/ProductCard";

const supportedCollections = new Set(["women", "men", "accessories"]);

function normalizeCollection(collection?: string) {
  const normalizedCollection = collection?.toLowerCase();

  if (!normalizedCollection || normalizedCollection === "all" || normalizedCollection === "featured") {
    return "all";
  }

  return supportedCollections.has(normalizedCollection) ? normalizedCollection : "all";
}

export function Collection(props: {
  collection: string;
}) {
  const collection = normalizeCollection(props.collection);

  const products = useQuery<any[]>({
    queryKey: ["products", collection],
    retry: false,
    queryFn: async () => {
      try {
        const params = new URLSearchParams({
          apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "",
          includeRefs: "true",
          fields: "data",
          limit: "20",
        });
        const response = await fetch(
          `https://cdn.builder.io/api/v3/content/product-data?${params}`
        );
        if (!response.ok) return [];

        const builderProducts = (await response.json()).results ?? [];

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
    <div className="flex flex-row flex-wrap justify-center gap-6 min-h-96">
      {products.data?.map((product, index) => (
        <ProductCard
          classes="w-[200px] shrink-0"
          key={`${product.id}-${index}`}
          dataSource="Builder"
          product={product}
        />
      ))}
    </div>
  );
}

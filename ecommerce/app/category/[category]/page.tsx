import { builder } from "@builder.io/sdk";
import CategoryLanding from "@/src/components/PLP/CategoryLanding";
import { capitalizeWord } from "@/lib/utils";

export const dynamic = "force-dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

async function fetchProducts(category: string) {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    limit: "50",
    noCache: "true",
    cachebust: String(Date.now()),
    "query.data.category": category,
    fields: "data,id,name",
  });
  const res = await fetch(
    `https://cdn.builder.io/api/v3/content/shopaholic-products?${params}`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const json = await res.json();
  return json.results ?? [];
}

async function fetchColorMap(): Promise<Record<string, string>> {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    limit: "20",
    noCache: "true",
    cachebust: String(Date.now()),
    fields: "id,data.name",
  });
  const res = await fetch(
    `https://cdn.builder.io/api/v3/content/product-color?${params}`,
    { cache: "no-store" }
  );
  if (!res.ok) return {};
  const json = await res.json();
  const map: Record<string, string> = {};
  for (const entry of json.results ?? []) {
    if (entry.id && entry.data?.name) map[entry.id] = entry.data.name;
  }
  return map;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const category = props?.params?.category.toLowerCase();

  const [plpTileContent, productDetailsContent, colorIdToName] = await Promise.all([
    builder.getAll("plp-tile", {
      cachebust: true,
      fetchOptions: { cache: "no-store" },
      userAttributes: { category },
      locale: "en-US",
    }),
    fetchProducts(category),
    fetchColorMap(),
  ]);

  return (
    <>
      <div className="flex gap-3 self-center mt-5 mr-auto text-base text-neutral-400">
        <div className="grow">{capitalizeWord(category)}</div>
      </div>
      <div className="self-center mt-5 text-4xl text-black tracking-[7.14px] max-md:max-w-full">
        {category.toUpperCase()}
      </div>
      <CategoryLanding
        products={productDetailsContent}
        plpTiles={plpTileContent}
        colorIdToName={colorIdToName}
      />
    </>
  );
}

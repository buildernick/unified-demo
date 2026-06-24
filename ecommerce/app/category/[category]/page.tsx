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

export default async function CategoryPage(props: CategoryPageProps) {
  const plpTileModel = "plp-tile";
  const plpProductDataModel = "shopaholic-products";

  const plpTileContent = await builder
    // Get the page content from Builder with the specified options
    .getAll(plpTileModel, {
      userAttributes: {
        category: props?.params?.category.toLowerCase(),
      },
      locale: "en-US",
    });

  const productDetailsContent = await builder
    .getAll(plpProductDataModel, {
      query: {
        data: {
          category: props?.params?.category.toLowerCase(),
        },
      },
      locale: "en-US",
      options: {
        noCache: true,
      },
    });
  // console.log("DATA", productDetailsContent);
  return (
    <>
      {/* Render the Builder page */}
      <div className="flex gap-3 self-center mt-5 mr-auto text-base text-neutral-400">
        <div className="grow">{capitalizeWord(props?.params?.category)}</div>
      </div>
      <div className="self-center mt-5 text-4xl text-black tracking-[7.14px] max-md:max-w-full">
        {props?.params?.category.toUpperCase()}
      </div>
      <CategoryLanding
        products={productDetailsContent}
        plpTiles={plpTileContent}
      />
    </>
  );
}

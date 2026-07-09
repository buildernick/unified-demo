"use client";

import ProductCard from "@/src/components/Card/ProductCard";

export default function FeaturedProducts({ products }: { products: any[] }) {
  return (
    <div className="self-stretch flex mt-10 w-full items-center gap-x-[89px] gap-y-10 justify-between flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} dataSource="Builder" product={product} />
      ))}
    </div>
  );
}

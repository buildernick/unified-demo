"use client";

import ProductCard from "@/src/components/Card/ProductCard";

export default function FeaturedProducts({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10 mt-10 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} dataSource="Builder" product={product} classes="w-full" />
      ))}
    </div>
  );
}

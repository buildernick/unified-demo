import Image from "next/image";

export type LuluProduct = {
  name: string;
  price: string;
  image: string;
  colorCount: number;
};

export function LuluProductCard({ name, price, image, colorCount }: LuluProduct) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[5/6] w-full overflow-hidden bg-lulu-sand">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <h3 className="font-lulu-display text-lulu-product-title text-lulu-ink">
          {name}
        </h3>
        <span className="font-lulu-display text-lulu-body-md text-lulu-ink">
          {price}
        </span>
      </div>
      <p className="mt-1 font-lulu-display text-lulu-label text-lulu-stone">
        {colorCount} {colorCount === 1 ? "Color" : "Colors"}
      </p>
    </div>
  );
}

import Image from "next/image";
import { LuluCategoryTitle } from "@/src/lulu/components/LuluCategoryTitle";

export type LuluCategoryCardProps = {
  label: string;
  image: string;
  href: string;
};

export function LuluCategoryCard({ label, image, href }: LuluCategoryCardProps) {
  return (
    <a href={href} className="group flex flex-col items-center gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-lulu-sand">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(min-width: 768px) 16vw, 45vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <LuluCategoryTitle className="block w-full text-center leading-tight">
        {label}
      </LuluCategoryTitle>
    </a>
  );
}

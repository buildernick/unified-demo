import Image from "next/image";
import { LuluButton } from "@/src/lulu/components/LuluButton";

export type LuluHeroProps = {
  image: string;
  imageAlt: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export function LuluHero({
  image,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: LuluHeroProps) {
  return (
    <section className="relative flex h-[600px] items-end overflow-hidden bg-lulu-ink md:h-[738px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-90"
      />
      <div className="relative z-10 max-w-xl px-6 pb-14 text-lulu-bone md:px-10">
        <h1 className="font-lulu-display text-lulu-display-xl leading-none">
          {title}
        </h1>
        <p className="mt-3 font-lulu-display text-lulu-display-sm">
          {subtitle}
        </p>
        <div className="mt-14">
          <LuluButton
            href={ctaHref}
            variant="secondary"
            className="border-lulu-bone bg-lulu-bone/90 text-lulu-ink hover:bg-lulu-bone"
          >
            {ctaLabel}
          </LuluButton>
        </div>
      </div>
    </section>
  );
}

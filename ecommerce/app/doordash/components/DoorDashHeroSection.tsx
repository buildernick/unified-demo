import type { ReactNode } from "react";

interface DoorDashHeroSectionProps {
  /** Exactly 4 images, in order: [outerLeft, innerLeft, innerRight, outerRight] */
  images: string[];
  children: ReactNode;
}

export function DoorDashHeroSection({ images, children }: DoorDashHeroSectionProps) {
  const [outerLeft, innerLeft, innerRight, outerRight] = images;

  return (
    <div className="w-full max-w-[1296px]">
      {/*
        4-column grid on md+: the card spans the two middle columns (over the
        "inner" images), guaranteeing the two "outer" images stay fully
        visible on either side. On mobile, images are hidden and the card
        becomes the grid's only child, so it isn't rendered twice.
      */}
      <div className="grid w-full grid-cols-1 items-center gap-0 md:grid-cols-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={outerLeft}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="relative z-[1] hidden h-[420px] w-full rounded-2xl object-cover md:col-start-1 md:row-start-1 md:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={innerLeft}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="relative z-[2] hidden h-[460px] w-full -translate-x-10 rounded-2xl object-cover md:col-start-2 md:row-start-1 md:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={innerRight}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="relative z-[2] hidden h-[460px] w-full translate-x-10 rounded-2xl object-cover md:col-start-3 md:row-start-1 md:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={outerRight}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="relative z-[1] hidden h-[420px] w-full rounded-2xl object-cover md:col-start-4 md:row-start-1 md:block"
        />

        <div className="relative z-10 col-start-1 row-start-1 mx-auto w-full max-w-[564px] rounded-[20px] border border-[#f8f8f8] bg-white p-6 shadow-[0_4px_25.4px_0_rgba(0,0,0,0.1)] md:col-start-2 md:col-span-2 md:justify-self-center md:min-h-[460px] flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { LuluFooter } from "@/src/lulu/components/LuluFooter";
import { luluStories } from "@/src/lulu/sample-data";

export default function LuluStoryPage() {
  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h1 className="font-lulu-display text-lulu-display-lg text-lulu-ink">
            Catch the highlights
          </h1>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-16 md:grid-cols-3">
          {luluStories.map((story) => (
            <article key={story.headline} className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-lulu-sand">
                <Image
                  src={story.image}
                  alt={story.headline}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-6">
                <p className="font-lulu-display text-lulu-display-sm text-lulu-ink">
                  {story.headline}
                </p>
                <p className="mt-4 font-lulu-display text-lulu-body-md text-lulu-ink">
                  {story.copy}
                </p>
                <a
                  href="/lulu/story"
                  className="mt-8 inline-block border-b border-lulu-ink font-lulu-display text-lulu-button uppercase text-lulu-ink"
                >
                  {story.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LuluFooter />
    </>
  );
}

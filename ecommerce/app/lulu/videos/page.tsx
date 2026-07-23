import { builder } from "@builder.io/sdk";
import { LuluVideoPlayer } from "@/src/lulu/components/LuluVideoPlayer";
import { LuluFooter } from "@/src/lulu/components/LuluFooter";

export const dynamic = "force-dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type LuluVideoEntry = {
  id: string;
  data: { title?: string; url: string };
};

export default async function LuluVideosPage() {
  const videos: LuluVideoEntry[] = await builder.getAll("lulu-video", {
    cachebust: true,
    fetchOptions: { cache: "no-store" },
    fields: "id,data",
  });

  return (
    <>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1560px]">
          <h1 className="font-lulu-display text-lulu-display-lg text-lulu-ink">
            Lulu videos
          </h1>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              <LuluVideoPlayer videoUrl={video.data.url} />
              <div>
                <h3 className="font-lulu-display text-lulu-body-md font-semibold text-lulu-ink">
                  {video.data.title || "Untitled"}
                </h3>
                <a
                  href={video.data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block break-all font-lulu-display text-lulu-label text-lulu-stone"
                >
                  {video.data.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LuluFooter />
    </>
  );
}

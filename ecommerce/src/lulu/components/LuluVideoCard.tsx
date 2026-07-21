import clsx from "clsx";

export type LuluVideoFit = "fitHeight" | "pictureBox";

export type LuluVideoCardProps = {
  youtubeUrl: string;
  overlayText?: string;
  fit?: LuluVideoFit;
  className?: string;
};

function getYoutubeId(url: string) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : "";
}

// Card is always a fixed 3:5 box; YouTube video is assumed 16:9. These are
// the exact width/height percentages needed to either fill the card's
// height and crop the sides ("fitHeight"), or fit the whole video inside
// the card and letterbox top/bottom ("pictureBox").
const CARD_ASPECT = 3 / 5;
const VIDEO_ASPECT = 16 / 9;
const FIT_HEIGHT_WIDTH_PCT = (VIDEO_ASPECT / CARD_ASPECT) * 100;
const PICTURE_BOX_HEIGHT_PCT = (CARD_ASPECT / VIDEO_ASPECT) * 100;

export function LuluVideoCard({
  youtubeUrl,
  overlayText,
  fit = "fitHeight",
  className,
}: LuluVideoCardProps) {
  const videoId = getYoutubeId(youtubeUrl);
  const embedSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&rel=0`
    : "";

  const iframeStyle =
    fit === "fitHeight"
      ? { width: `${FIT_HEIGHT_WIDTH_PCT}%`, height: "100%" }
      : { width: "100%", height: `${PICTURE_BOX_HEIGHT_PCT}%` };

  return (
    <div
      className={clsx(
        "relative aspect-[3/5] w-full overflow-hidden bg-lulu-ink",
        className
      )}
    >
      {embedSrc && (
        <iframe
          src={embedSrc}
          title={overlayText || "Video"}
          allow="autoplay; encrypted-media"
          style={iframeStyle}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      {overlayText && (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-lulu-ink/60 via-transparent to-transparent p-6">
          <span className="font-lulu-display text-lulu-display-sm text-lulu-bone">
            {overlayText}
          </span>
        </div>
      )}
    </div>
  );
}

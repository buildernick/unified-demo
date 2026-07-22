"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

export type LuluVideoFit = "fitHeight" | "pictureBox";

export type LuluVideoEntry = {
  data?: { url?: string; title?: string };
  value?: { data?: { url?: string; title?: string } };
};

export type LuluHlsVideoCardProps = {
  videoEntry?: LuluVideoEntry;
  videoUrl?: string;
  posterUrl?: string;
  overlayText?: string;
  fit?: LuluVideoFit;
  className?: string;
};

function resolveVideoUrl(videoEntry?: LuluVideoEntry, videoUrl?: string) {
  if (videoUrl?.trim()) return videoUrl.trim();
  return videoEntry?.data?.url || videoEntry?.value?.data?.url || "";
}

// Card is always a fixed 3:5 box; source video is assumed 16:9. These are
// the exact width/height percentages needed to either fill the card's
// height and crop the sides ("fitHeight"), or fit the whole video inside
// the card and letterbox top/bottom ("pictureBox").
const CARD_ASPECT = 3 / 5;
const VIDEO_ASPECT = 16 / 9;
const FIT_HEIGHT_WIDTH_PCT = (VIDEO_ASPECT / CARD_ASPECT) * 100;
const PICTURE_BOX_HEIGHT_PCT = (CARD_ASPECT / VIDEO_ASPECT) * 100;

export function LuluHlsVideoCard({
  videoEntry,
  videoUrl,
  posterUrl,
  overlayText,
  fit = "fitHeight",
  className,
}: LuluHlsVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const resolvedUrl = resolveVideoUrl(videoEntry, videoUrl);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !resolvedUrl) return;

    const isHls = resolvedUrl.includes(".m3u8");
    if (!isHls) {
      video.src = resolvedUrl;
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = resolvedUrl;
      return;
    }

    let hls: import("hls.js").default | undefined;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled || !videoRef.current) return;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(resolvedUrl);
        hls.attachMedia(videoRef.current);
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [resolvedUrl]);

  const videoStyle =
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
      <video
        ref={videoRef}
        poster={posterUrl}
        autoPlay
        loop
        muted
        playsInline
        style={videoStyle}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
      />
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

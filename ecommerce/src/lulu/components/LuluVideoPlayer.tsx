"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export type LuluVideoPlayerProps = {
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
  fill?: boolean;
  crop?: boolean;
};

export function LuluVideoPlayer({
  videoUrl,
  posterUrl,
  className,
  fill = false,
  crop = true,
}: LuluVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    const isHls = videoUrl.includes(".m3u8");
    if (!isHls) {
      video.src = videoUrl;
      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
      return;
    }

    let hls: import("hls.js").default | undefined;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled || !videoRef.current) return;
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [videoUrl]);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div
      className={clsx(
        "overflow-hidden bg-lulu-ink",
        fill
          ? "absolute inset-0"
          : crop
            ? "relative aspect-[5/6] w-full"
            : "relative w-full",
        className
      )}
    >
      <video
        ref={videoRef}
        poster={posterUrl}
        autoPlay={Boolean(videoUrl)}
        muted
        loop
        playsInline
        className={
          crop ? "h-full w-full object-cover" : "block h-auto w-full"
        }
      />
      <button
        type="button"
        title={isPlaying ? "Pause video" : "Play video"}
        onClick={toggle}
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-lulu-pill bg-lulu-bone/80"
      >
        <span className="sr-only">
          {isPlaying ? "Pause video" : "Play video"}. This video does not
          have sound.
        </span>
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24" aria-hidden="true">
            <path
              d="M15.89 5v14M8.11 5v14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24" aria-hidden="true">
            <path
              d="M6.5 5.63c0-.858.92-1.402 1.673-.989l11.582 6.37a1.129 1.129 0 0 1 0 1.98L8.173 19.36a1.13 1.13 0 0 1-1.673-.99z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

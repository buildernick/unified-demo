"use client";

import { useEffect, useRef, useState } from "react";
import { DoorDashKPICard } from "./DoorDashKPICard";

export interface DoorDashMetric {
  value: string;
  label: string;
  sublabel: string;
  name: string;
  image: string;
  personName?: string;
  personRole?: string;
}

interface DoorDashMetricsCarouselProps {
  metrics: DoorDashMetric[];
}

export function DoorDashMetricsCarousel({ metrics }: DoorDashMetricsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateActiveIndex() {
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-metric-card]"));

      let closestIndex = 0;
      let closestDistance = Infinity;
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    }

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", updateActiveIndex);
  }, []);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelectorAll<HTMLElement>("[data-metric-card]")[index];
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  function scrollByCard(direction: 1 | -1) {
    scrollToIndex(Math.min(metrics.length - 1, Math.max(0, activeIndex + direction)));
  }

  return (
    <div>
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous metrics"
          onClick={() => scrollByCard(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--dd-border)] hover:bg-[var(--dd-grey-light)]"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next metrics"
          onClick={() => scrollByCard(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--dd-border)] hover:bg-[var(--dd-grey-light)]"
        >
          →
        </button>
      </div>

      <div
        ref={trackRef}
        className="flex items-start gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {metrics.map((metric, index) => (
          <DoorDashKPICard
            key={metric.name}
            value={metric.value}
            label={metric.label}
            sublabel={metric.sublabel}
            name={metric.name}
            image={metric.image}
            personName={metric.personName}
            isActive={index === activeIndex}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

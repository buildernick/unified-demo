"use client";

import { useEffect, useRef, useState } from "react";

export interface DoorDashVerticalSection {
  heading: string;
  supportText?: string;
  description: string;
}

interface DoorDashVerticalSectionsProps {
  sections: DoorDashVerticalSection[];
}

export function DoorDashVerticalSections({ sections }: DoorDashVerticalSectionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportMid = window.innerHeight / 2;
      const raw = (viewportMid - rect.top) / rect.height;
      const clamped = Math.min(1, Math.max(0, raw));

      setProgress(clamped);
      setActiveIndex(Math.min(sections.length - 1, Math.floor(clamped * sections.length)));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-[2px_1fr] gap-8 md:grid-cols-[2px_1fr]">
        <div className="relative w-[2px] rounded-full bg-[var(--dd-border)]">
          <div
            className="absolute left-0 top-0 w-[2px] rounded-full bg-[var(--dd-red)] transition-[height] duration-150"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        <div className="flex flex-col gap-12">
          {sections.map((section, index) => (
            <div
              key={section.heading}
              className="transition-opacity duration-300"
              style={{ opacity: index <= activeIndex ? 1 : 0.4 }}
            >
              {section.supportText && (
                <p className="dd-caption mb-2 font-bold uppercase tracking-[1px] text-[var(--dd-text-medium)]">
                  {section.supportText}
                </p>
              )}
              <p className="dd-h4 mb-2">{section.heading}</p>
              <p className="dd-body text-[var(--dd-text-medium)]">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

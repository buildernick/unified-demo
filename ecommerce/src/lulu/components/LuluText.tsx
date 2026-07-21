import { cn } from "@/lib/utils";

type LuluTextSize = "lg" | "md" | "sm";
type LuluTextTone = "ink" | "stone";

const sizeClasses: Record<LuluTextSize, string> = {
  lg: "text-lulu-body-lg",
  md: "text-lulu-body-md",
  sm: "text-lulu-body-sm",
};

const toneClasses: Record<LuluTextTone, string> = {
  ink: "text-lulu-ink",
  stone: "text-lulu-stone",
};

type LuluTextProps = {
  children: React.ReactNode;
  size?: LuluTextSize;
  tone?: LuluTextTone;
  as?: "p" | "span" | "div";
  className?: string;
};

export function LuluText({
  children,
  size = "md",
  tone = "ink",
  as: Tag = "p",
  className,
}: LuluTextProps) {
  return (
    <Tag
      className={cn(
        "font-lulu-display",
        sizeClasses[size],
        toneClasses[tone],
        className
      )}
    >
      {children}
    </Tag>
  );
}

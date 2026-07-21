import { cn } from "@/lib/utils";

type LuluHeadlineSize = "xl" | "lg" | "md" | "sm";

const sizeClasses: Record<LuluHeadlineSize, string> = {
  xl: "text-lulu-display-xl",
  lg: "text-lulu-display-lg",
  md: "text-lulu-display-md",
  sm: "text-lulu-display-sm",
};

type LuluHeadlineProps = {
  children: React.ReactNode;
  size?: LuluHeadlineSize;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

export function LuluHeadline({
  children,
  size = "lg",
  as: Tag = "h2",
  className,
}: LuluHeadlineProps) {
  return (
    <Tag
      className={cn(
        "font-lulu-display text-lulu-ink",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}

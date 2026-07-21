import Link from "next/link";
import { cn } from "@/lib/utils";

type LuluButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function LuluButton({
  href,
  children,
  variant = "primary",
  className,
}: LuluButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lulu-pill px-6 font-lulu-display text-lulu-button transition-colors",
        variant === "primary"
          ? "bg-lulu-ink text-lulu-bone hover:bg-lulu-ink/90"
          : "border border-lulu-ink bg-transparent text-lulu-ink hover:bg-lulu-ink hover:text-lulu-bone",
        className
      )}
    >
      {children}
    </Link>
  );
}

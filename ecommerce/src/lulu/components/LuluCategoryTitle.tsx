import clsx from "clsx";

type LuluCategoryTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function LuluCategoryTitle({ children, className }: LuluCategoryTitleProps) {
  return (
    <span
      className={clsx("font-lulu-display text-lulu-display-md text-lulu-ink", className)}
    >
      {children}
    </span>
  );
}

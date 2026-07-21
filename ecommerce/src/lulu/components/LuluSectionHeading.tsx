export function LuluSectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-lulu-display text-lulu-display-lg text-lulu-ink ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}

export function LuluImagePlaceholder({
  className,
}: {
  className?: string;
}) {
  return <div className={`bg-[#D9D9D9] ${className ?? ""}`} />;
}

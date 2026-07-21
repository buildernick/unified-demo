import "./lulu-theme.css";

export const metadata = {
  title: "Lulu",
  description: "Parallel Lulu-themed pages for design system exploration.",
};

export default function LuluLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lulu-theme lulu-page">{children}</div>;
}

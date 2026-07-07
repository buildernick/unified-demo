export interface DoorDashPillLinkProps {
  text?: string;
  href?: string;
}

export function DoorDashPillLink({ text = "Learn more", href = "#" }: DoorDashPillLinkProps) {
  return (
    <a href={href} className="dd-pill-link">
      {text}
    </a>
  );
}

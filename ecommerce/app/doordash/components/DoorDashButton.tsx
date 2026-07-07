export interface DoorDashButtonProps {
  text?: string;
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
}

export function DoorDashButton({
  text = "Talk to a growth expert",
  variant = "primary",
  href,
}: DoorDashButtonProps) {
  const className = `dd-btn dd-btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return <button className={className}>{text}</button>;
}

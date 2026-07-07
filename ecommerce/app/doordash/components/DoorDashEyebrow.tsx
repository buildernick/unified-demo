export interface DoorDashEyebrowProps {
  text?: string;
}

export function DoorDashEyebrow({ text = "DoorDash Commerce Platform" }: DoorDashEyebrowProps) {
  return <span className="dd-eyebrow">{text}</span>;
}

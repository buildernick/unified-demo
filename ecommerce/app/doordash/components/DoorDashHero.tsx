interface DoorDashHeroProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
}

export function DoorDashHero({ eyebrow, heading, subheading }: DoorDashHeroProps) {
  return (
    <div>
      <p className="dd-small mb-3 font-bold uppercase tracking-[1px] text-[var(--dd-red)]">
        {eyebrow}
      </p>
      <h1 className="dd-h1 mb-4 max-w-[600px]">{heading}</h1>
      {subheading && (
        <p className="dd-body max-w-[520px] text-[var(--dd-text-medium)]">{subheading}</p>
      )}
    </div>
  );
}

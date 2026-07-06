export interface DoorDashKPICardProps {
  value: string;
  label: string;
  sublabel: string;
  name: string;
  image: string;
  personName?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function DoorDashKPICard({
  value,
  label,
  sublabel,
  name,
  image,
  personName,
  isActive = true,
  onClick,
}: DoorDashKPICardProps) {
  return (
    <button
      type="button"
      data-metric-card
      aria-label={name}
      aria-current={isActive}
      onClick={onClick}
      className="relative h-[480px] shrink-0 cursor-pointer overflow-hidden rounded-2xl text-left transition-[width,opacity] duration-300 ease-in-out"
      style={{ width: isActive ? 640 : 460, opacity: isActive ? 1 : 0.7 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-x-0 bottom-0 h-[280px]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0) 14.2%, #191919 118.75%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 text-white">
        <div className="flex min-w-0 flex-col gap-2">
          <p className="whitespace-nowrap text-[53px] font-medium leading-[53px] tracking-[-1.5px]">{value}</p>
          <p className="text-2xl font-bold leading-6 tracking-[-0.48px]">{label}</p>
          <p className="text-sm font-medium leading-[22px] text-white/90">{sublabel}</p>
        </div>
        {personName && (
          <div className="flex shrink-0 flex-col items-end gap-0.5 text-right">
            <p className="text-sm font-medium leading-[22px] text-white/90">{name}</p>
            <p className="text-sm font-medium leading-[22px] text-white/90">{personName}</p>
          </div>
        )}
      </div>
    </button>
  );
}

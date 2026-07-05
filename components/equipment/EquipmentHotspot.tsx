import { cn } from "@/lib/utils";

interface EquipmentHotspotProps {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function EquipmentHotspot({
  id,
  label,
  x,
  y,
  width,
  height,
  isSelected,
  onSelect,
}: EquipmentHotspotProps) {
  return (
    <g
      className="cursor-pointer outline-none"
      onClick={() => onSelect(id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Inspect ${label}`}
      aria-pressed={isSelected}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        className={cn(
          "fill-primary/5 stroke-primary/30 transition-all duration-200",
          "hover:fill-primary/15 hover:stroke-primary/70",
          isSelected && "fill-primary/20 stroke-primary stroke-2",
        )}
      />
      <text
        x={x + width / 2}
        y={y - 8}
        textAnchor="middle"
        className="fill-muted-foreground text-[11px] font-medium uppercase tracking-wide"
      >
        {label}
      </text>
    </g>
  );
}

import { cn } from "@/lib/utils";

interface OutsideAirDamperVisualProps {
  openPercent: number;
  isRepairing: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export function OutsideAirDamperVisual({
  openPercent,
  isRepairing,
  x = 48,
  y = 120,
  width = 56,
  height = 100,
}: OutsideAirDamperVisualProps) {
  const bladeAngle = (openPercent / 100) * 75;
  const centerX = x + width / 2;
  const centerY = y + height / 2;

  return (
    <g aria-label={`Outside air damper ${openPercent}% open`}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        className={cn(
          "fill-primary/10 stroke-primary/40 transition-all duration-500",
          isRepairing && "animate-pulse",
        )}
      />
      <g
        transform={`rotate(${bladeAngle} ${centerX} ${centerY})`}
        className="transition-transform duration-500"
      >
        {[0, 1, 2].map((index) => (
          <line
            key={index}
            x1={centerX - 18 + index * 18}
            y1={y + 12}
            x2={centerX - 18 + index * 18}
            y2={y + height - 12}
            className="stroke-primary"
            strokeWidth={3}
          />
        ))}
      </g>
      <text
        x={centerX}
        y={y + height + 16}
        textAnchor="middle"
        className="fill-primary text-[10px] font-medium"
      >
        {openPercent}%
      </text>
    </g>
  );
}

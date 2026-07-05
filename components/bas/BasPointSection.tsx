import type { BasPointSection } from "@/lib/types";
import { cn } from "@/lib/utils";

import { BasPointRow } from "./BasPointRow";

interface BasPointSectionProps {
  section: BasPointSection;
  className?: string;
}

const HIGHLIGHT_IDS = new Set(["oad-pos", "sat", "unit-sts"]);

function formatValue(
  pointId: string,
  value: string,
  category: BasPointSection["category"],
): string {
  if (category === "damper") {
    return `${value}%`;
  }
  if (category === "temperature") {
    return `${value}°F`;
  }
  if (pointId === "fan-spd") {
    return `${value}%`;
  }
  return value;
}

export function BasPointSectionBlock({ section, className }: BasPointSectionProps) {
  return (
    <section
      className={cn(
        "rounded-lg border border-border/60 bg-card/40",
        className,
      )}
    >
      <header className="border-b border-border/60 px-4 py-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
          {section.title}
        </h3>
      </header>
      <div className="px-4 py-1">
        {section.points.map((point) => (
          <BasPointRow
            key={point.id}
            label={point.label}
            value={formatValue(point.id, point.value, section.category)}
            highlight={HIGHLIGHT_IDS.has(point.id)}
          />
        ))}
      </div>
    </section>
  );
}

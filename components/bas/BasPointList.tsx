import type { BasPointSection } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BasPointListProps {
  sections: BasPointSection[];
  highlightedPointIds?: Set<string>;
  isUpdating?: boolean;
  className?: string;
}

function formatPointValue(
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
  return value;
}

export function BasPointList({
  sections,
  highlightedPointIds = new Set(),
  isUpdating = false,
  className,
}: BasPointListProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {sections.map((section) => (
        <section
          key={section.id}
          className="rounded-lg border border-border/60 bg-card/40"
        >
          <header className="border-b border-border/60 px-4 py-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
              {section.title}
            </h3>
          </header>
          <ul className="divide-y divide-border/40 px-4">
            {section.points.map((point) => (
              <li
                key={point.id}
                className="flex items-center justify-between gap-4 py-2.5"
              >
                <span className="text-sm text-muted-foreground">
                  {point.label}
                </span>
                <span
                  className={cn(
                    "font-mono text-sm font-medium tabular-nums transition-colors duration-300",
                    highlightedPointIds.has(point.id)
                      ? "text-amber-400"
                      : "text-foreground",
                    isUpdating && "animate-pulse",
                  )}
                >
                  {formatPointValue(point.id, point.value, section.category)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

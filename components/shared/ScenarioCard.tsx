import type { LucideIcon } from "lucide-react";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ScenarioCatalogItem } from "@/lib/types";
import { cn } from "@/lib/utils";

import { DifficultyBadge } from "./DifficultyBadge";

interface ScenarioCardProps {
  scenario: ScenarioCatalogItem;
  icon: LucideIcon;
  className?: string;
}

export function ScenarioCard({ scenario, icon: Icon, className }: ScenarioCardProps) {
  const isActive = scenario.status === "active";

  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border border-border/60 bg-card/50 p-6 transition-colors",
        isActive
          ? "hover:border-primary/40 hover:bg-card/80"
          : "opacity-60",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </div>
        <DifficultyBadge difficulty={scenario.difficulty} />
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-3">
        <h3 className="text-base font-semibold text-foreground">
          {scenario.title}
        </h3>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden />
          {scenario.duration}
        </p>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {scenario.description}
        </p>
      </div>

      <div className="mt-6">
        {isActive ? (
          <Button className="w-full">Start Scenario</Button>
        ) : (
          <Button variant="secondary" className="w-full" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </article>
  );
}

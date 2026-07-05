"use client";

import { BAS_GRAPHICS_TITLE } from "@/lib/constants";
import { useScenarioState } from "@/hooks";
import { cn } from "@/lib/utils";

import { BasPointList } from "./BasPointList";

interface BasGraphicsScreenProps {
  className?: string;
}

export function BasGraphicsScreen({ className }: BasGraphicsScreenProps) {
  const { basPointSections, highlightedPointIds, repairInProgress } =
    useScenarioState();

  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-card/30",
        className,
      )}
    >
      <header className="border-b border-border/60 px-5 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          {BAS_GRAPHICS_TITLE}
        </h2>
        <p className="text-xs text-muted-foreground">
          Live points · North Ridge Office Building
        </p>
      </header>

      <div className="flex-1 overflow-y-auto p-5">
        <BasPointList
          sections={basPointSections}
          highlightedPointIds={highlightedPointIds}
          isUpdating={repairInProgress}
        />
      </div>
    </div>
  );
}

"use client";

import { BasGraphicsScreen } from "@/components/bas/BasGraphicsScreen";
import { useScenarioState } from "@/hooks";
import { cn } from "@/lib/utils";

import { SimulationProgressBanner } from "./SimulationProgressBanner";

interface BasGraphicsWorkspaceProps {
  className?: string;
}

export function BasGraphicsWorkspace({ className }: BasGraphicsWorkspaceProps) {
  const { repairInProgress, repairProgressLabel } = useScenarioState();

  return (
    <div className={cn("flex h-full flex-col gap-3", className)}>
      <SimulationProgressBanner
        label={repairProgressLabel}
        isActive={repairInProgress}
      />
      <BasGraphicsScreen className="min-h-0 flex-1" />
    </div>
  );
}

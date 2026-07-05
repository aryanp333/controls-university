"use client";

import { CheckCircle2, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScenarioState } from "@/hooks";
import { cn } from "@/lib/utils";

interface RepairPanelProps {
  className?: string;
}

export function RepairPanel({ className }: RepairPanelProps) {
  const {
    canRepair,
    repairInProgress,
    isRepaired,
    startRepair,
    repairProgressLabel,
  } = useScenarioState();

  if (!canRepair && !repairInProgress && !isRepaired) {
    return null;
  }

  return (
    <section
      className={cn(
        "rounded-lg border border-border/60 bg-card/40",
        className,
      )}
    >
      <header className="border-b border-border/60 px-4 py-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
          Repair
        </h3>
      </header>

      <div className="flex flex-col gap-3 p-4">
        {canRepair ? (
          <>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Diagnosis confirmed. Free the outside air damper linkage and
              verify actuator travel.
            </p>
            <Button size="sm" className="w-full" onClick={startRepair}>
              <Wrench className="size-4" data-icon="inline-start" />
              Repair Outside Air Damper
            </Button>
          </>
        ) : null}

        {repairInProgress && repairProgressLabel ? (
          <p className="text-xs leading-relaxed text-primary">
            {repairProgressLabel}
          </p>
        ) : null}

        {isRepaired ? (
          <div className="flex items-start gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <div>
              <p className="text-sm font-semibold text-emerald-400">
                Repair Complete
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Outside air damper is tracking command. Alarm cleared and unit
                status is Normal Operation.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

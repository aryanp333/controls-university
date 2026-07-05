"use client";

import { AlertTriangle, CheckCircle2 } from "lucide-react";

import { useScenarioState } from "@/hooks";
import { cn } from "@/lib/utils";

interface AlarmPanelProps {
  className?: string;
}

export function AlarmPanel({ className }: AlarmPanelProps) {
  const { state } = useScenarioState();
  const { simulation } = state;

  if (!simulation.alarmActive) {
    return (
      <section
        className={cn(
          "rounded-lg border border-emerald-500/30 bg-emerald-500/10",
          className,
        )}
      >
        <header className="flex items-center gap-2 border-b border-emerald-500/20 px-4 py-2.5">
          <CheckCircle2 className="size-4 text-emerald-400" aria-hidden />
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Alarms
          </h3>
        </header>
        <div className="px-4 py-3">
          <p className="text-sm text-muted-foreground">No active alarms</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "rounded-lg border border-red-500/30 bg-red-500/10",
        className,
      )}
    >
      <header className="flex items-center gap-2 border-b border-red-500/20 px-4 py-2.5">
        <AlertTriangle className="size-4 text-red-400" aria-hidden />
        <h3 className="text-xs font-bold uppercase tracking-wider text-red-400">
          Active Alarm
        </h3>
      </header>
      <div className="px-4 py-3">
        <p className="text-sm font-semibold text-foreground">
          {simulation.alarmName}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Unit is unable to maintain ventilation and mixed air temperature
          targets.
        </p>
      </div>
    </section>
  );
}

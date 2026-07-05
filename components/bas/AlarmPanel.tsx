import { AlertTriangle } from "lucide-react";

import { AHU_ECONOMIZER_ALARM } from "@/lib/scenarios";
import { cn } from "@/lib/utils";

interface AlarmPanelProps {
  className?: string;
}

export function AlarmPanel({ className }: AlarmPanelProps) {
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
          {AHU_ECONOMIZER_ALARM.name}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {AHU_ECONOMIZER_ALARM.description}
        </p>
      </div>
    </section>
  );
}

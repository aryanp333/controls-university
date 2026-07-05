import { AHU_ECONOMIZER_ALARM } from "@/lib/scenarios";
import { cn } from "@/lib/utils";

interface BasSummaryPanelProps {
  className?: string;
}

/** @deprecated Use BasSidePanel with AlarmPanel instead. */
export function BasSummaryPanel({ className }: BasSummaryPanelProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col border-l border-border/60 bg-card/20",
        className,
      )}
    >
      <div className="border-b border-border/60 px-5 py-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
          System Summary
        </h2>
      </div>
      <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-5">
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-400">
            Active Alarm
          </p>
          <p className="mt-2 text-sm font-semibold text-foreground">
            {AHU_ECONOMIZER_ALARM.name}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {AHU_ECONOMIZER_ALARM.description}
          </p>
        </div>
      </div>
    </aside>
  );
}

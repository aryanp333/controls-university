import { BAS_SYSTEM_ALERT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BasSummaryPanelProps {
  className?: string;
}

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
        <div className="rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Active Alarm
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {BAS_SYSTEM_ALERT}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Review damper command vs. feedback values. Compare with physical
          inspection findings on the AHU view.
        </p>
      </div>
    </aside>
  );
}

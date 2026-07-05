import type { WorkOrderPriority, WorkOrderStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const PRIORITY_STYLES: Record<WorkOrderPriority, string> = {
  Low: "bg-muted text-muted-foreground border-border",
  Medium: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  High: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  Critical: "bg-red-500/15 text-red-400 border-red-500/25",
};

const STATUS_STYLES: Record<WorkOrderStatus, string> = {
  Active: "bg-primary/15 text-primary border-primary/25",
  Pending: "bg-muted text-muted-foreground border-border",
  Complete: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
};

interface WorkOrderStatusBadgeProps {
  label: string;
  variant: "priority" | "status";
  value: WorkOrderPriority | WorkOrderStatus;
}

export function WorkOrderStatusBadge({
  label,
  variant,
  value,
}: WorkOrderStatusBadgeProps) {
  const styles =
    variant === "priority"
      ? PRIORITY_STYLES[value as WorkOrderPriority]
      : STATUS_STYLES[value as WorkOrderStatus];

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span
        className={cn(
          "inline-flex w-fit items-center rounded border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
          styles,
        )}
      >
        {value}
      </span>
    </div>
  );
}

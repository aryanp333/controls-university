import { cn } from "@/lib/utils";

interface BasPointRowProps {
  label: string;
  value: string;
  unit?: string;
  highlight?: boolean;
}

export function BasPointRow({
  label,
  value,
  unit,
  highlight = false,
}: BasPointRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/40 py-2.5 last:border-b-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={cn(
          "font-mono text-sm font-medium tabular-nums",
          highlight ? "text-amber-400" : "text-foreground",
        )}
      >
        {value}
        {unit ? (
          <span className="ml-1 text-xs text-muted-foreground">{unit}</span>
        ) : null}
      </span>
    </div>
  );
}

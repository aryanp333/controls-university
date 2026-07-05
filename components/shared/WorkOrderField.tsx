import { cn } from "@/lib/utils";

interface WorkOrderFieldProps {
  label: string;
  value: string;
  className?: string;
  multiline?: boolean;
}

export function WorkOrderField({
  label,
  value,
  className,
  multiline = false,
}: WorkOrderFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd
        className={cn(
          "text-sm text-foreground",
          multiline && "leading-relaxed",
        )}
      >
        {multiline ? `"${value}"` : value}
      </dd>
    </div>
  );
}

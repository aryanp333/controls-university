import { AHU_2_EQUIPMENT_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface EquipmentStatusProps {
  className?: string;
}

export function EquipmentStatus({ className }: EquipmentStatusProps) {
  return (
    <section
      className={cn(
        "rounded-lg border border-border/60 bg-card/40",
        className,
      )}
    >
      <header className="border-b border-border/60 px-4 py-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
          Equipment Status
        </h3>
      </header>
      <ul className="divide-y divide-border/40 px-4">
        {AHU_2_EQUIPMENT_STATUS.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-4 py-2.5"
          >
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="font-mono text-sm font-medium tabular-nums text-foreground">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

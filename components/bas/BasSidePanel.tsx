import { cn } from "@/lib/utils";

import { AlarmPanel } from "./AlarmPanel";
import { DiagnosisPanel } from "./DiagnosisPanel";
import { EquipmentStatus } from "./EquipmentStatus";

interface BasSidePanelProps {
  className?: string;
}

export function BasSidePanel({ className }: BasSidePanelProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col gap-4 overflow-y-auto border-l border-border/60 bg-card/20 p-4",
        className,
      )}
    >
      <AlarmPanel />
      <EquipmentStatus />
      <DiagnosisPanel className="flex-1" />
    </aside>
  );
}

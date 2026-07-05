import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import type { BasViewMode } from "@/lib/types";
import { cn } from "@/lib/utils";

interface InspectionToolbarProps {
  basTabletOpened: boolean;
  diagnosisComplete: boolean;
  activeView: BasViewMode;
  onOpenBasTablet: () => void;
  onViewChange: (view: BasViewMode) => void;
  className?: string;
}

export function InspectionToolbar({
  basTabletOpened,
  diagnosisComplete,
  activeView,
  onOpenBasTablet,
  onViewChange,
  className,
}: InspectionToolbarProps) {
  return (
    <footer
      className={cn(
        "flex h-16 shrink-0 items-center justify-between gap-4 border-t border-border/60 bg-card/40 px-5",
        className,
      )}
    >
      <div className="flex flex-wrap gap-3">
        {!basTabletOpened ? (
          <Button size="sm" onClick={onOpenBasTablet}>
            Open BAS Tablet
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              onViewChange(activeView === "ahu" ? "bas" : "ahu")
            }
          >
            {activeView === "ahu" ? "Switch to BAS" : "Switch to AHU"}
          </Button>
        )}
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          render={<Link href={ROUTES.workOrder}>Return to Work Order</Link>}
        />
      </div>
      <Button size="sm" disabled={!basTabletOpened || !diagnosisComplete}>
        Continue
      </Button>
    </footer>
  );
}

"use client";

import { useMemo, useState } from "react";

import { AhuDiagram } from "@/components/equipment";
import {
  AHU_INSPECTION_COMPONENTS,
  CURRENT_SCENARIO_TITLE,
  INSPECTION_PANEL_EMPTY_MESSAGE,
} from "@/lib/constants";
import type { EquipmentComponentId } from "@/lib/types";

import { BasTabletOverlay } from "./BasTabletOverlay";
import { InspectionPanel } from "./InspectionPanel";
import { InspectionToolbar } from "./InspectionToolbar";
import { TrainingTopNav } from "./TrainingTopNav";

export function InspectionWorkspace() {
  const [selectedId, setSelectedId] = useState<EquipmentComponentId | null>(
    null,
  );
  const [basTabletOpened, setBasTabletOpened] = useState(false);
  const [basTabletOpen, setBasTabletOpen] = useState(false);

  const selectedComponent = useMemo(
    () => AHU_INSPECTION_COMPONENTS.find((item) => item.id === selectedId) ?? null,
    [selectedId],
  );

  function handleOpenBasTablet() {
    setBasTabletOpen(true);
    setBasTabletOpened(true);
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <TrainingTopNav scenarioTitle={CURRENT_SCENARIO_TITLE} />

      <div className="flex min-h-0 flex-1">
        <div className="w-[70%] min-w-0 p-4">
          <AhuDiagram
            selectedId={selectedId}
            onSelect={setSelectedId}
            className="h-full"
          />
        </div>
        <div className="w-[30%] min-w-0">
          <InspectionPanel
            component={selectedComponent}
            emptyMessage={INSPECTION_PANEL_EMPTY_MESSAGE}
            className="h-full"
          />
        </div>
      </div>

      <InspectionToolbar
        basTabletOpened={basTabletOpened}
        onOpenBasTablet={handleOpenBasTablet}
      />

      <BasTabletOverlay
        open={basTabletOpen}
        onClose={() => setBasTabletOpen(false)}
      />
    </div>
  );
}

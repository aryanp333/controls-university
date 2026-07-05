"use client";

import { useMemo, useState } from "react";

import { BasGraphicsScreen, BasSummaryPanel } from "@/components/bas";
import { AhuDiagram } from "@/components/equipment";
import {
  AHU_INSPECTION_COMPONENTS,
  CURRENT_SCENARIO_TITLE,
  INSPECTION_PANEL_EMPTY_MESSAGE,
} from "@/lib/constants";
import type { BasViewMode, EquipmentComponentId } from "@/lib/types";

import { InspectionPanel } from "./InspectionPanel";
import { InspectionToolbar } from "./InspectionToolbar";
import { TrainingTopNav } from "./TrainingTopNav";
import { ViewToggle } from "./ViewToggle";

export function InspectionWorkspace() {
  const [selectedId, setSelectedId] = useState<EquipmentComponentId | null>(
    null,
  );
  const [activeView, setActiveView] = useState<BasViewMode>("ahu");
  const [basTabletOpened, setBasTabletOpened] = useState(false);

  const selectedComponent = useMemo(
    () => AHU_INSPECTION_COMPONENTS.find((item) => item.id === selectedId) ?? null,
    [selectedId],
  );

  function handleOpenBasTablet() {
    setBasTabletOpened(true);
    setActiveView("bas");
  }

  function handleViewChange(view: BasViewMode) {
    if (view === "bas" && !basTabletOpened) {
      return;
    }
    setActiveView(view);
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <TrainingTopNav scenarioTitle={CURRENT_SCENARIO_TITLE} />

      <ViewToggle
        activeView={activeView}
        basUnlocked={basTabletOpened}
        onViewChange={handleViewChange}
      />

      <div className="flex min-h-0 flex-1">
        <div className="w-[70%] min-w-0 p-4">
          {activeView === "ahu" ? (
            <AhuDiagram
              selectedId={selectedId}
              onSelect={setSelectedId}
              className="h-full"
            />
          ) : (
            <BasGraphicsScreen className="h-full" />
          )}
        </div>
        <div className="w-[30%] min-w-0">
          {activeView === "ahu" ? (
            <InspectionPanel
              component={selectedComponent}
              emptyMessage={INSPECTION_PANEL_EMPTY_MESSAGE}
              className="h-full"
            />
          ) : (
            <BasSummaryPanel className="h-full" />
          )}
        </div>
      </div>

      <InspectionToolbar
        basTabletOpened={basTabletOpened}
        activeView={activeView}
        onOpenBasTablet={handleOpenBasTablet}
        onViewChange={handleViewChange}
      />
    </div>
  );
}

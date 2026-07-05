"use client";

import { useEffect, useMemo, useState } from "react";

import { BasSidePanel } from "@/components/bas";
import { AhuDiagram } from "@/components/equipment";
import { useScenarioState } from "@/hooks";
import {
  AHU_INSPECTION_COMPONENTS,
  CURRENT_SCENARIO_TITLE,
  INSPECTION_PANEL_EMPTY_MESSAGE,
} from "@/lib/constants";
import type { BasViewMode, EquipmentComponentId } from "@/lib/types";

import { BasGraphicsWorkspace } from "./BasGraphicsWorkspace";
import { InspectionPanel } from "./InspectionPanel";
import { InspectionToolbar } from "./InspectionToolbar";
import { SimulationProgressBanner } from "./SimulationProgressBanner";
import { TrainingTopNav } from "./TrainingTopNav";
import { ViewToggle } from "./ViewToggle";

export function InspectionWorkspace() {
  const {
    state,
    inspectComponent,
    openBasTablet,
    reviewBasData,
    isRepaired,
    oadDamperVisualPercent,
    repairInProgress,
    repairProgressLabel,
  } = useScenarioState();

  const [selectedId, setSelectedId] = useState<EquipmentComponentId | null>(
    null,
  );
  const [activeView, setActiveView] = useState<BasViewMode>("ahu");

  const selectedComponent = useMemo(
    () => AHU_INSPECTION_COMPONENTS.find((item) => item.id === selectedId) ?? null,
    [selectedId],
  );

  useEffect(() => {
    if (activeView === "bas" && state.basTabletOpened) {
      reviewBasData();
    }
  }, [activeView, reviewBasData, state.basTabletOpened]);

  function handleSelectComponent(id: EquipmentComponentId) {
    setSelectedId(id);
    inspectComponent(id);
  }

  function handleOpenBasTablet() {
    openBasTablet();
    setActiveView("bas");
  }

  function handleViewChange(view: BasViewMode) {
    if (view === "bas" && !state.basTabletOpened) {
      return;
    }
    setActiveView(view);
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <TrainingTopNav scenarioTitle={CURRENT_SCENARIO_TITLE} />

      <ViewToggle
        activeView={activeView}
        basUnlocked={state.basTabletOpened}
        onViewChange={handleViewChange}
      />

      <div className="flex min-h-0 flex-1">
        <div className="flex w-[70%] min-w-0 flex-col gap-3 p-4">
          {activeView === "ahu" ? (
            <>
              <SimulationProgressBanner
                label={repairProgressLabel}
                isActive={repairInProgress}
              />
              <AhuDiagram
                selectedId={selectedId}
                onSelect={handleSelectComponent}
                oadDamperOpenPercent={oadDamperVisualPercent}
                isRepairing={repairInProgress}
                className="min-h-0 flex-1"
              />
            </>
          ) : (
            <BasGraphicsWorkspace className="min-h-0 flex-1" />
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
            <BasSidePanel className="h-full" />
          )}
        </div>
      </div>

      <InspectionToolbar
        basTabletOpened={state.basTabletOpened}
        isRepaired={isRepaired}
        activeView={activeView}
        onOpenBasTablet={handleOpenBasTablet}
        onViewChange={handleViewChange}
      />
    </div>
  );
}

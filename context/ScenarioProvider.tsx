"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

import { useRepairTimer } from "@/hooks/use-repair-timer";
import {
  canStartRepair,
  canSubmitDiagnosis,
  INITIAL_SCENARIO_PROGRESS,
  isDiagnosisCorrect,
  isRepairInProgress,
  scenarioProgressReducer,
} from "@/lib/simulation/scenario-reducer";
import {
  selectBasPointSections,
  selectEquipmentStatusItems,
  selectHighlightedPointIds,
  selectOadDamperVisualPercent,
  selectRepairProgressLabel,
} from "@/lib/simulation/runtime-selectors";
import { AHU_ECONOMIZER_SCENARIO_CONFIG } from "@/lib/scenarios";
import type {
  DiagnosisId,
  ScenarioConfig,
  ScenarioProgressState,
} from "@/lib/types/scenario-progress";
import type { EquipmentComponentId } from "@/lib/types/inspection";

interface ScenarioContextValue {
  state: ScenarioProgressState;
  config: ScenarioConfig;
  basPointSections: ReturnType<typeof selectBasPointSections>;
  equipmentStatusItems: ReturnType<typeof selectEquipmentStatusItems>;
  highlightedPointIds: Set<string>;
  oadDamperVisualPercent: number;
  repairProgressLabel: string | null;
  inspectComponent: (componentId: EquipmentComponentId) => void;
  openBasTablet: () => void;
  reviewBasData: () => void;
  submitDiagnosis: (diagnosisId: DiagnosisId) => boolean;
  startRepair: () => void;
  canDiagnose: boolean;
  diagnosisComplete: boolean;
  canRepair: boolean;
  repairInProgress: boolean;
  isRepaired: boolean;
}

const ScenarioContext = createContext<ScenarioContextValue | null>(null);

interface ScenarioProviderProps {
  children: React.ReactNode;
  config?: ScenarioConfig;
}

export function ScenarioProvider({
  children,
  config = AHU_ECONOMIZER_SCENARIO_CONFIG,
}: ScenarioProviderProps) {
  const [state, dispatch] = useReducer(
    (current: ScenarioProgressState, action: Parameters<typeof scenarioProgressReducer>[1]) =>
      scenarioProgressReducer(current, action, config),
    INITIAL_SCENARIO_PROGRESS,
  );

  const inspectComponent = useCallback((componentId: EquipmentComponentId) => {
    dispatch({ type: "inspect-component", componentId });
  }, []);

  const openBasTablet = useCallback(() => {
    dispatch({ type: "open-bas-tablet" });
  }, []);

  const reviewBasData = useCallback(() => {
    dispatch({ type: "review-bas-data" });
  }, []);

  const submitDiagnosis = useCallback(
    (diagnosisId: DiagnosisId) => {
      if (!canSubmitDiagnosis(state, config)) {
        return false;
      }
      dispatch({ type: "submit-diagnosis", diagnosisId });
      return diagnosisId === config.correctDiagnosisId;
    },
    [config, state],
  );

  const startRepair = useCallback(() => {
    dispatch({ type: "start-repair" });
  }, []);

  const advanceRepair = useCallback(() => {
    dispatch({ type: "advance-repair" });
  }, []);

  const completeRepair = useCallback(() => {
    dispatch({ type: "complete-repair" });
  }, []);

  useRepairTimer({
    repairPhase: state.simulation.repairPhase,
    repairStepIndex: state.simulation.repairStepIndex,
    onAdvance: advanceRepair,
    onComplete: completeRepair,
  });

  const value = useMemo((): ScenarioContextValue => {
    const { simulation } = state;

    return {
      state,
      config,
      basPointSections: selectBasPointSections(simulation),
      equipmentStatusItems: selectEquipmentStatusItems(simulation),
      highlightedPointIds: selectHighlightedPointIds(simulation),
      oadDamperVisualPercent: selectOadDamperVisualPercent(simulation),
      repairProgressLabel: selectRepairProgressLabel(simulation),
      inspectComponent,
      openBasTablet,
      reviewBasData,
      submitDiagnosis,
      startRepair,
      canDiagnose: canSubmitDiagnosis(state, config),
      diagnosisComplete: isDiagnosisCorrect(state, config),
      canRepair: canStartRepair(state, config),
      repairInProgress: isRepairInProgress(state),
      isRepaired: state.isRepaired,
    };
  }, [
    advanceRepair,
    config,
    inspectComponent,
    openBasTablet,
    reviewBasData,
    startRepair,
    state,
    submitDiagnosis,
  ]);

  return (
    <ScenarioContext.Provider value={value}>{children}</ScenarioContext.Provider>
  );
}

export function useScenarioState(): ScenarioContextValue {
  const context = useContext(ScenarioContext);
  if (!context) {
    throw new Error("useScenarioState must be used within ScenarioProvider");
  }
  return context;
}

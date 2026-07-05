"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

import {
  canSubmitDiagnosis,
  INITIAL_SCENARIO_PROGRESS,
  isDiagnosisCorrect,
  scenarioProgressReducer,
} from "@/lib/simulation/scenario-reducer";
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
  inspectComponent: (componentId: EquipmentComponentId) => void;
  openBasTablet: () => void;
  reviewBasData: () => void;
  submitDiagnosis: (diagnosisId: DiagnosisId) => boolean;
  canDiagnose: boolean;
  diagnosisComplete: boolean;
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

  const value = useMemo((): ScenarioContextValue => {
    const canDiagnose = canSubmitDiagnosis(state, config);
    const diagnosisComplete = isDiagnosisCorrect(state, config);

    return {
      state,
      config,
      inspectComponent,
      openBasTablet,
      reviewBasData,
      submitDiagnosis,
      canDiagnose,
      diagnosisComplete,
    };
  }, [config, inspectComponent, openBasTablet, reviewBasData, state, submitDiagnosis]);

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

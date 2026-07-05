import type { EquipmentComponentId } from "@/lib/types/inspection";
import type {
  ScenarioConfig,
  ScenarioProgressAction,
  ScenarioProgressState,
} from "@/lib/types/scenario-progress";

import {
  applyRepairStep,
  createFaultRuntime,
  getRepairStep,
  isRepairSequenceComplete,
} from "./repair-sequence";

export const INITIAL_SCENARIO_PROGRESS: ScenarioProgressState = {
  inspectedComponents: [],
  basTabletOpened: false,
  discoveredClues: [],
  completedDiagnosis: null,
  isRepaired: false,
  simulation: createFaultRuntime(),
};

function addClue(clues: string[], clueId: string): string[] {
  return clues.includes(clueId) ? clues : [...clues, clueId];
}

function cluesFromInspection(
  componentId: EquipmentComponentId,
  clues: string[],
): string[] {
  if (componentId === "outside-air-damper") {
    return addClue(clues, "oad-physical-closed");
  }
  if (componentId === "mixed-air-sensor") {
    return addClue(clues, "mat-matches-oat");
  }
  return clues;
}

function cluesFromBasReview(clues: string[]): string[] {
  let next = addClue(clues, "oad-cmd-full-open");
  next = addClue(next, "oad-pos-closed");
  next = addClue(next, "mat-matches-oat");
  return next;
}

export function scenarioProgressReducer(
  state: ScenarioProgressState,
  action: ScenarioProgressAction,
  config: ScenarioConfig,
): ScenarioProgressState {
  switch (action.type) {
    case "inspect-component": {
      const inspected = state.inspectedComponents.includes(action.componentId)
        ? state.inspectedComponents
        : [...state.inspectedComponents, action.componentId];

      return {
        ...state,
        inspectedComponents: inspected,
        discoveredClues: cluesFromInspection(action.componentId, state.discoveredClues),
      };
    }
    case "open-bas-tablet":
      return {
        ...state,
        basTabletOpened: true,
        discoveredClues: addClue(state.discoveredClues, "bas-accessed"),
      };
    case "review-bas-data":
      if (!state.basTabletOpened) {
        return state;
      }
      return {
        ...state,
        discoveredClues: cluesFromBasReview(state.discoveredClues),
      };
    case "submit-diagnosis":
      if (action.diagnosisId !== config.correctDiagnosisId) {
        return state;
      }
      return {
        ...state,
        completedDiagnosis: action.diagnosisId,
      };
    case "start-repair": {
      if (!isDiagnosisCorrect(state, config) || state.isRepaired) {
        return state;
      }

      const firstStep = getRepairStep(0);
      if (!firstStep) {
        return state;
      }

      return {
        ...state,
        simulation: applyRepairStep(state.simulation, firstStep, 0),
      };
    }
    case "advance-repair": {
      if (state.simulation.repairPhase !== "repairing") {
        return state;
      }

      const nextIndex = state.simulation.repairStepIndex + 1;
      const nextStep = getRepairStep(nextIndex);

      if (!nextStep) {
        return {
          ...state,
          isRepaired: true,
          simulation: {
            ...state.simulation,
            repairPhase: "complete",
          },
        };
      }

      const simulation = applyRepairStep(state.simulation, nextStep, nextIndex);

      return {
        ...state,
        isRepaired: simulation.repairPhase === "complete",
        simulation,
      };
    }
    case "complete-repair":
      return {
        ...state,
        isRepaired: true,
        simulation: {
          ...state.simulation,
          repairPhase: "complete",
        },
      };
    case "reset":
      return INITIAL_SCENARIO_PROGRESS;
    default:
      return state;
  }
}

export function canSubmitDiagnosis(
  state: ScenarioProgressState,
  config: ScenarioConfig,
): boolean {
  return config.requiredCluesForDiagnosis.every((clueId) =>
    state.discoveredClues.includes(clueId),
  );
}

export function isDiagnosisCorrect(
  state: ScenarioProgressState,
  config: ScenarioConfig,
): boolean {
  return state.completedDiagnosis === config.correctDiagnosisId;
}

export function canStartRepair(
  state: ScenarioProgressState,
  config: ScenarioConfig,
): boolean {
  return isDiagnosisCorrect(state, config) && !state.isRepaired;
}

export function isRepairInProgress(state: ScenarioProgressState): boolean {
  return state.simulation.repairPhase === "repairing";
}

import type { EquipmentComponentId } from "@/lib/types/inspection";
import type {
  ScenarioConfig,
  ScenarioProgressAction,
  ScenarioProgressState,
} from "@/lib/types/scenario-progress";

export const INITIAL_SCENARIO_PROGRESS: ScenarioProgressState = {
  inspectedComponents: [],
  basTabletOpened: false,
  discoveredClues: [],
  completedDiagnosis: null,
  isRepaired: false,
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

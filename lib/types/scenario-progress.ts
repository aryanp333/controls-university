import type { EquipmentComponentId } from "./inspection";

export type ClueId = string;

export type DiagnosisId = string;

export interface ScenarioClue {
  id: ClueId;
  label: string;
  description: string;
}

export interface DiagnosisOption {
  id: DiagnosisId;
  label: string;
}

export interface ScenarioProgressState {
  inspectedComponents: EquipmentComponentId[];
  basTabletOpened: boolean;
  discoveredClues: ClueId[];
  completedDiagnosis: DiagnosisId | null;
  isRepaired: boolean;
}

export type ScenarioProgressAction =
  | { type: "inspect-component"; componentId: EquipmentComponentId }
  | { type: "open-bas-tablet" }
  | { type: "review-bas-data" }
  | { type: "submit-diagnosis"; diagnosisId: DiagnosisId }
  | { type: "reset" };

export interface ScenarioConfig {
  id: string;
  clues: Record<ClueId, ScenarioClue>;
  requiredCluesForDiagnosis: ClueId[];
  diagnosisOptions: DiagnosisOption[];
  correctDiagnosisId: DiagnosisId;
}

/** Simulation engine — implemented in Phase 1. */

export {
  canStartRepair,
  canSubmitDiagnosis,
  INITIAL_SCENARIO_PROGRESS,
  isDiagnosisCorrect,
  isRepairInProgress,
  scenarioProgressReducer,
} from "./scenario-reducer";

export {
  AHU_ECONOMIZER_REPAIR_STEPS,
  applyRepairStep,
  createFaultRuntime,
  FAULT_POINT_VALUES,
  getRepairStep,
  isRepairSequenceComplete,
  REPAIR_STEP_INTERVAL_MS,
} from "./repair-sequence";

export {
  selectBasPointSections,
  selectEquipmentStatusItems,
  selectHighlightedPointIds,
  selectOadDamperVisualPercent,
  selectRepairProgressLabel,
} from "./runtime-selectors";

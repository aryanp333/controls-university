import type { ScenarioClue, ScenarioConfig } from "@/lib/types/scenario-progress";

export const AHU_ECONOMIZER_SCENARIO_ID = "ahu-economizer-failure";

export const AHU_ECONOMIZER_CLUES: Record<string, ScenarioClue> = {
  "bas-accessed": {
    id: "bas-accessed",
    label: "BAS Access",
    description: "BAS tablet opened and live points are available for review.",
  },
  "oad-physical-closed": {
    id: "oad-physical-closed",
    label: "Physical Inspection",
    description:
      "Actuator is energized, but the outside air damper blades remain fully closed.",
  },
  "oad-cmd-full-open": {
    id: "oad-cmd-full-open",
    label: "BAS Data",
    description: "Outside air damper command reads 100%.",
  },
  "oad-pos-closed": {
    id: "oad-pos-closed",
    label: "BAS Data",
    description: "Outside air damper position feedback reads 0%.",
  },
  "mat-matches-oat": {
    id: "mat-matches-oat",
    label: "BAS Data",
    description:
      "Mixed air temperature matches outside air temperature at 78°F.",
  },
};

export const AHU_ECONOMIZER_DIAGNOSIS_OPTIONS = [
  { id: "oad-stuck", label: "Outside Air Damper Stuck" },
  { id: "mat-sensor-fault", label: "Mixed Air Sensor Failure" },
  { id: "supply-fan-fault", label: "Supply Fan Failure" },
  { id: "economizer-enable-fault", label: "Economizer Enable Fault" },
] as const;

export const AHU_ECONOMIZER_SCENARIO_CONFIG: ScenarioConfig = {
  id: AHU_ECONOMIZER_SCENARIO_ID,
  clues: AHU_ECONOMIZER_CLUES,
  requiredCluesForDiagnosis: [
    "oad-physical-closed",
    "oad-cmd-full-open",
    "oad-pos-closed",
    "mat-matches-oat",
  ],
  diagnosisOptions: [...AHU_ECONOMIZER_DIAGNOSIS_OPTIONS],
  correctDiagnosisId: "oad-stuck",
};

export const AHU_ECONOMIZER_ALARM = {
  name: "Economizer Failure",
  description:
    "Unit is unable to maintain ventilation and mixed air temperature targets.",
};

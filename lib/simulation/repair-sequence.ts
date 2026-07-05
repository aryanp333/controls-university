import type {
  RepairStepSnapshot,
  SimulationPointValues,
  SimulationRuntime,
} from "@/lib/types/simulation-runtime";

export const REPAIR_STEP_INTERVAL_MS = 900;

export const FAULT_POINT_VALUES: SimulationPointValues = {
  oat: 78,
  mat: 78,
  sat: 77,
  rat: 75,
  oadCmd: 100,
  oadPos: 0,
  fanStatus: "Running",
};

export const AHU_ECONOMIZER_REPAIR_STEPS: RepairStepSnapshot[] = [
  {
    oadPosition: 0,
    mat: 78,
    sat: 77,
    alarmActive: true,
    equipmentStatus: "Repair In Progress",
  },
  {
    oadPosition: 25,
    mat: 76,
    sat: 75,
    alarmActive: true,
    equipmentStatus: "Repair In Progress",
  },
  {
    oadPosition: 50,
    mat: 73,
    sat: 70,
    alarmActive: true,
    equipmentStatus: "Repair In Progress",
  },
  {
    oadPosition: 75,
    mat: 70,
    sat: 62,
    alarmActive: true,
    equipmentStatus: "Repair In Progress",
  },
  {
    oadPosition: 100,
    mat: 68,
    sat: 55,
    alarmActive: false,
    equipmentStatus: "Normal Operation",
  },
];

export function createFaultRuntime(): SimulationRuntime {
  return {
    points: { ...FAULT_POINT_VALUES },
    alarmActive: true,
    alarmName: "Economizer Failure",
    equipmentStatus: "Alarm",
    repairPhase: "idle",
    repairStepIndex: -1,
  };
}

export function applyRepairStep(
  runtime: SimulationRuntime,
  step: RepairStepSnapshot,
  stepIndex: number,
): SimulationRuntime {
  return {
    ...runtime,
    points: {
      ...runtime.points,
      mat: step.mat,
      sat: step.sat,
      oadPos: step.oadPosition,
    },
    alarmActive: step.alarmActive,
    equipmentStatus: step.equipmentStatus,
    repairPhase: stepIndex === AHU_ECONOMIZER_REPAIR_STEPS.length - 1
      ? "complete"
      : "repairing",
    repairStepIndex: stepIndex,
  };
}

export function getRepairStep(stepIndex: number): RepairStepSnapshot | null {
  return AHU_ECONOMIZER_REPAIR_STEPS[stepIndex] ?? null;
}

export function isRepairSequenceComplete(stepIndex: number): boolean {
  return stepIndex >= AHU_ECONOMIZER_REPAIR_STEPS.length - 1;
}

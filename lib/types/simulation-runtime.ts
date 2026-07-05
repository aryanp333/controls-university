export type RepairPhase = "idle" | "repairing" | "complete";

export interface SimulationPointValues {
  oat: number;
  mat: number;
  sat: number;
  rat: number;
  oadCmd: number;
  oadPos: number;
  fanStatus: string;
}

export interface SimulationRuntime {
  points: SimulationPointValues;
  alarmActive: boolean;
  alarmName: string;
  equipmentStatus: string;
  repairPhase: RepairPhase;
  repairStepIndex: number;
}

export interface RepairStepSnapshot {
  oadPosition: number;
  mat: number;
  sat: number;
  alarmActive: boolean;
  equipmentStatus: string;
}

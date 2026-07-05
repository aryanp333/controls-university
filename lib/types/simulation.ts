import type { PointId, PointValue } from "./points";

export type SimulationAction =
  | { type: "write-point"; pointId: PointId; value: number | boolean }
  | { type: "reset" }
  | { type: "pause" }
  | { type: "resume" };

export interface SimulationState {
  points: Record<PointId, PointValue>;
  simTimeMs: number;
  isRunning: boolean;
}

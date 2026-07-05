import type { EquipmentInstance } from "./equipment";
import type { PointDefinition } from "./points";

export type ScenarioId = string;

/** Catalog metadata for a training scenario. */
export interface ScenarioSummary {
  id: ScenarioId;
  title: string;
  description: string;
}

/** Full scenario definition loaded by the simulation engine. */
export interface ScenarioDefinition extends ScenarioSummary {
  points: PointDefinition[];
  equipment: EquipmentInstance[];
}

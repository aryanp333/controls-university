import type { EquipmentInstance } from "./equipment";
import type { PointDefinition } from "./points";

export type ScenarioId = string;

export type ScenarioDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ScenarioStatus = "active" | "coming-soon";

/** Catalog metadata for a training scenario. */
export interface ScenarioSummary {
  id: ScenarioId;
  title: string;
  description: string;
}

/** Scenario card data shown on the selection page. */
export interface ScenarioCatalogItem extends ScenarioSummary {
  difficulty: ScenarioDifficulty;
  duration: string;
  status: ScenarioStatus;
}

/** Full scenario definition loaded by the simulation engine. */
export interface ScenarioDefinition extends ScenarioSummary {
  points: PointDefinition[];
  equipment: EquipmentInstance[];
}

/** BAS-style point kinds used across simulation and UI layers. */
export type PointKind = "AI" | "AO" | "BI" | "BO";

export type PointId = string;

export interface PointDefinition {
  id: PointId;
  kind: PointKind;
  label: string;
  unit?: string;
}

export interface PointValue {
  id: PointId;
  value: number | boolean;
}

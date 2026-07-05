export type BasViewMode = "ahu" | "bas";

export type BasPointCategory = "temperature" | "damper" | "fan" | "point";

export interface BasDisplayPoint {
  id: string;
  label: string;
  value: string;
  category: BasPointCategory;
}

export interface BasPointSection {
  id: string;
  title: string;
  category: BasPointCategory;
  points: BasDisplayPoint[];
}

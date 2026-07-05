export type EquipmentComponentId =
  | "outside-air-damper"
  | "return-air-damper"
  | "supply-fan"
  | "filter"
  | "mixed-air-sensor"
  | "supply-air-temp-sensor";

export interface EquipmentComponentInspection {
  id: EquipmentComponentId;
  name: string;
  status: string;
  description: string;
  observation: string;
}

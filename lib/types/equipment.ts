import type { PointId } from "./points";

export type EquipmentTypeId = string;

export type EquipmentInstanceId = string;

export interface EquipmentInstance {
  id: EquipmentInstanceId;
  typeId: EquipmentTypeId;
  label: string;
  pointIds: PointId[];
}

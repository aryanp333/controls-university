import type { BasPointSection } from "@/lib/types/bas";
import type { SimulationRuntime } from "@/lib/types/simulation-runtime";

export interface EquipmentStatusItem {
  label: string;
  value: string;
}

export function selectBasPointSections(
  runtime: SimulationRuntime,
): BasPointSection[] {
  const { points } = runtime;

  return [
    {
      id: "temperatures",
      title: "Temperatures",
      category: "temperature",
      points: [
        { id: "oat", label: "Outside Air Temperature", value: String(points.oat), category: "temperature" },
        { id: "mat", label: "Mixed Air Temperature", value: String(points.mat), category: "temperature" },
        { id: "sat", label: "Supply Air Temperature", value: String(points.sat), category: "temperature" },
        { id: "rat", label: "Return Air Temperature", value: String(points.rat), category: "temperature" },
      ],
    },
    {
      id: "dampers",
      title: "Damper %",
      category: "damper",
      points: [
        { id: "oad-cmd", label: "Outside Air Damper Command", value: String(points.oadCmd), category: "damper" },
        { id: "oad-pos", label: "Outside Air Damper Position", value: String(points.oadPos), category: "damper" },
      ],
    },
    {
      id: "fan",
      title: "Fan Status",
      category: "fan",
      points: [
        { id: "fan-sts", label: "Supply Fan", value: points.fanStatus, category: "fan" },
      ],
    },
  ];
}

export function selectEquipmentStatusItems(
  runtime: SimulationRuntime,
): EquipmentStatusItem[] {
  const { points, equipmentStatus } = runtime;

  return [
    { label: "Unit Status", value: equipmentStatus },
    { label: "Supply Fan", value: points.fanStatus },
    { label: "OA Damper Command", value: `${points.oadCmd}%` },
    { label: "OA Damper Position", value: `${points.oadPos}%` },
    { label: "Outside Air Temp", value: `${points.oat}°F` },
    { label: "Mixed Air Temp", value: `${points.mat}°F` },
    { label: "Supply Air Temp", value: `${points.sat}°F` },
  ];
}

export function selectHighlightedPointIds(
  runtime: SimulationRuntime,
): Set<string> {
  const { points, alarmActive } = runtime;

  if (!alarmActive) {
    return new Set();
  }

  const highlights = new Set<string>();

  if (points.oadPos !== points.oadCmd) {
    highlights.add("oad-pos");
    highlights.add("oad-cmd");
  }

  if (points.mat >= points.oat - 0.5) {
    highlights.add("mat");
  }

  if (points.sat > 60) {
    highlights.add("sat");
  }

  return highlights;
}

export function selectOadDamperVisualPercent(runtime: SimulationRuntime): number {
  return runtime.points.oadPos;
}

export function selectRepairProgressLabel(runtime: SimulationRuntime): string | null {
  if (runtime.repairPhase === "idle") {
    return null;
  }

  if (runtime.repairPhase === "complete") {
    return "Repair complete. Unit returned to normal operation.";
  }

  return `Adjusting outside air damper linkage… ${runtime.points.oadPos}%`;
}

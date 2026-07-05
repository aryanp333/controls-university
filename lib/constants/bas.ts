import type { BasPointSection } from "@/lib/types/bas";

export const BAS_GRAPHICS_TITLE = "AHU-2 · BAS Graphics";

export const AHU_2_BAS_SECTIONS: BasPointSection[] = [
  {
    id: "temperatures",
    title: "Temperatures",
    category: "temperature",
    points: [
      { id: "oat", label: "Outside Air Temp", value: "58.2", category: "temperature" },
      { id: "mat", label: "Mixed Air Temp", value: "62.4", category: "temperature" },
      { id: "sat", label: "Supply Air Temp", value: "71.8", category: "temperature" },
      { id: "sat-sp", label: "Supply Air Setpoint", value: "55.0", category: "temperature" },
    ],
  },
  {
    id: "dampers",
    title: "Damper %",
    category: "damper",
    points: [
      { id: "oad-cmd", label: "OA Damper Command", value: "45", category: "damper" },
      { id: "oad-pos", label: "OA Damper Position", value: "15", category: "damper" },
      { id: "rad-pos", label: "RA Damper Position", value: "72", category: "damper" },
    ],
  },
  {
    id: "fan",
    title: "Fan Status",
    category: "fan",
    points: [
      { id: "fan-cmd", label: "Supply Fan Command", value: "ON", category: "fan" },
      { id: "fan-sts", label: "Supply Fan Status", value: "Running", category: "fan" },
      { id: "fan-spd", label: "Fan Speed", value: "68", category: "fan" },
    ],
  },
  {
    id: "points",
    title: "Points",
    category: "point",
    points: [
      { id: "econ-en", label: "Economizer Enable", value: "ON", category: "point" },
      { id: "occ-mode", label: "Occupancy Mode", value: "Occupied", category: "point" },
      { id: "unit-sts", label: "Unit Status", value: "Alarm", category: "point" },
    ],
  },
];

export const BAS_SYSTEM_ALERT =
  "OA damper command and feedback do not match. Investigate damper actuator and linkage.";

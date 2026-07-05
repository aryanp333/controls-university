import type { BasPointSection } from "@/lib/types/bas";

export const BAS_GRAPHICS_TITLE = "AHU-2 · BAS Graphics";

export const AHU_2_BAS_SECTIONS: BasPointSection[] = [
  {
    id: "temperatures",
    title: "Temperatures",
    category: "temperature",
    points: [
      { id: "oat", label: "Outside Air Temperature", value: "78", category: "temperature" },
      { id: "mat", label: "Mixed Air Temperature", value: "78", category: "temperature" },
      { id: "sat", label: "Supply Air Temperature", value: "77", category: "temperature" },
      { id: "rat", label: "Return Air Temperature", value: "75", category: "temperature" },
    ],
  },
  {
    id: "dampers",
    title: "Damper %",
    category: "damper",
    points: [
      { id: "oad-cmd", label: "Outside Air Damper Command", value: "100", category: "damper" },
      { id: "oad-pos", label: "Outside Air Damper Position", value: "0", category: "damper" },
    ],
  },
  {
    id: "fan",
    title: "Fan Status",
    category: "fan",
    points: [
      { id: "fan-sts", label: "Supply Fan", value: "Running", category: "fan" },
    ],
  },
];

export const AHU_2_EQUIPMENT_STATUS = [
  { label: "Supply Fan", value: "Running" },
  { label: "OA Damper Command", value: "100%" },
  { label: "OA Damper Position", value: "0%" },
  { label: "Outside Air Temp", value: "78°F" },
  { label: "Mixed Air Temp", value: "78°F" },
  { label: "Supply Air Temp", value: "77°F" },
] as const;

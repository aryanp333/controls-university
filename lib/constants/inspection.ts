import type { EquipmentComponentInspection } from "@/lib/types/inspection";

export const INSPECTION_PANEL_EMPTY_MESSAGE =
  "Select a component to inspect.";

export const AHU_INSPECTION_COMPONENTS: EquipmentComponentInspection[] = [
  {
    id: "outside-air-damper",
    name: "Outside Air Damper",
    status: "Not Responding",
    description:
      "Modulates outside air intake to the mixing chamber based on economizer and minimum OA setpoints.",
    observation:
      "Actuator is energized. Damper blades remain in the fully closed position.",
  },
  {
    id: "return-air-damper",
    name: "Return Air Damper",
    status: "Normal",
    description:
      "Regulates return air flow recirculated through the unit during normal operation.",
    observation: "Damper blade moves freely through full stroke range.",
  },
  {
    id: "supply-fan",
    name: "Supply Fan",
    status: "Normal",
    description:
      "Delivers conditioned air to the supply duct serving occupied zones.",
    observation: "Fan is running. No unusual vibration or noise detected.",
  },
  {
    id: "filter",
    name: "Filter",
    status: "Normal",
    description:
      "Removes particulate from mixed air before it passes through the fan section.",
    observation: "Filter bank is seated properly. Differential pressure within range.",
  },
  {
    id: "mixed-air-sensor",
    name: "Mixed Air Sensor",
    status: "Normal",
    description:
      "Measures temperature of air entering the fan section after OA and RA mixing.",
    observation:
      "Sensor reading is stable. Temperature matches outside air conditions.",
  },
  {
    id: "supply-air-temp-sensor",
    name: "Supply Air Temperature Sensor",
    status: "Normal",
    description:
      "Measures discharge air temperature leaving the unit on the supply duct.",
    observation: "Reading is elevated compared to setpoint. Verify damper operation.",
  },
];

export const CURRENT_SCENARIO_TITLE = "AHU Economizer Failure";

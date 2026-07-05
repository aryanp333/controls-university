import type { ScenarioCatalogItem } from "@/lib/types";

export const SCENARIOS_PAGE = {
  title: "Training Scenarios",
  subtitle: "Select a Building Automation System training scenario.",
} as const;

export const SCENARIO_CATALOG: ScenarioCatalogItem[] = [
  {
    id: "ahu-economizer-failure",
    title: "AHU Economizer Failure",
    description:
      "Diagnose a stuck outside air damper causing poor economizer performance and elevated supply air temperature.",
    difficulty: "Beginner",
    duration: "5–10 min",
    status: "active",
  },
  {
    id: "chilled-water-valve-failure",
    title: "Chilled Water Valve Failure",
    description:
      "Investigate a chilled water valve that fails to modulate, leading to coil temperature deviation and comfort complaints.",
    difficulty: "Intermediate",
    duration: "10–15 min",
    status: "coming-soon",
  },
  {
    id: "supply-fan-failure",
    title: "Supply Fan Failure",
    description:
      "Troubleshoot a supply fan that fails to start, tracing through safeties, VFD status, and airflow proving signals.",
    difficulty: "Beginner",
    duration: "5–10 min",
    status: "coming-soon",
  },
];

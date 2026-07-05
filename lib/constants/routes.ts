export const ROUTES = {
  home: "/",
  scenarios: "/scenarios",
  workOrder: "/work-order",
  inspection: "/inspection",
  simulator: "/simulator",
  simulatorScenario: (id: string) => `/simulator/${id}`,
} as const;

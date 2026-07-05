export const ROUTES = {
  home: "/",
  scenarios: "/scenarios",
  simulator: "/simulator",
  simulatorScenario: (id: string) => `/simulator/${id}`,
} as const;

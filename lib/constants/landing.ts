export const LANDING_HERO = {
  headline: "Interactive Building Automation Training",
  description:
    "Learn building automation systems by diagnosing real equipment faults in a simulated environment — practice on AHUs, VAVs, and central plant systems without risk to live buildings.",
  primaryCta: "Start Training",
  secondaryCta: "About",
} as const;

export const LANDING_FEATURES = [
  {
    id: "real-equipment",
    title: "Real Equipment",
    description:
      "Train on accurate representations of AHUs, dampers, sensors, and actuators modeled after commercial BAS installations.",
  },
  {
    id: "bas-simulator",
    title: "BAS Simulator",
    description:
      "Operate inside a realistic BAS workstation with live points, trends, alarms, and graphic screens — just like the field.",
  },
  {
    id: "guided-diagnostics",
    title: "Guided Diagnostics",
    description:
      "Work through structured fault scenarios with objectives and hints that build troubleshooting skills step by step.",
  },
] as const;

export const LANDING_NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
] as const;

export const LANDING_ABOUT = {
  title: "Training built for the field",
  description:
    "Controls University bridges the gap between classroom theory and on-site BAS work. Technicians and engineers gain hands-on diagnostic experience in a browser-based simulator designed for commercial building automation.",
} as const;

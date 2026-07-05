import { AirVent, Droplets, Fan } from "lucide-react";

import { AppShell } from "@/components/layout";
import { ScenarioCard, ScenariosPageHeader } from "@/components/shared";
import { SCENARIO_CATALOG } from "@/lib/constants";

const SCENARIO_ICONS = {
  "ahu-economizer-failure": AirVent,
  "chilled-water-valve-failure": Droplets,
  "supply-fan-failure": Fan,
} as const;

export default function ScenariosPage() {
  return (
    <AppShell>
      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <ScenariosPageHeader />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SCENARIO_CATALOG.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                scenario={scenario}
                icon={SCENARIO_ICONS[scenario.id as keyof typeof SCENARIO_ICONS]}
              />
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}

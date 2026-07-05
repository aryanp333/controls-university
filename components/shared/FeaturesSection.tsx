import { ClipboardCheck, Cpu, MonitorDot } from "lucide-react";

import { LANDING_FEATURES } from "@/lib/constants/landing";

import { FeatureCard } from "./FeatureCard";

const FEATURE_ICONS = {
  "real-equipment": Cpu,
  "bas-simulator": MonitorDot,
  "guided-diagnostics": ClipboardCheck,
} as const;

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-t border-border/40 bg-muted/20 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Platform
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Everything you need to learn BAS diagnostics
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {LANDING_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={FEATURE_ICONS[feature.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LANDING_HERO } from "@/lib/constants/landing";

import { Logo } from "./Logo";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-glow"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <Logo showTagline className="mb-10 items-center" />
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl md:leading-[1.15]">
          {LANDING_HERO.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {LANDING_HERO.description}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" className="h-11 min-w-[160px] px-6 text-sm">
            {LANDING_HERO.primaryCta}
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 min-w-[160px] px-6 text-sm"
            nativeButton={false}
            render={
              <a href="#about">{LANDING_HERO.secondaryCta}</a>
            }
          />
        </div>
      </div>
    </section>
  );
}

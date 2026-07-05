import { LANDING_ABOUT } from "@/lib/constants/landing";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border/40 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          About
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {LANDING_ABOUT.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {LANDING_ABOUT.description}
        </p>
      </div>
    </section>
  );
}

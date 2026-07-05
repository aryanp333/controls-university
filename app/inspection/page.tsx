import { AppShell } from "@/components/layout";
import { Logo } from "@/components/shared";

export default function InspectionPage() {
  return (
    <AppShell>
      <section className="px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto max-w-2xl">
          <Logo href="/" />
          <h1 className="mt-8 text-2xl font-semibold text-foreground">
            Inspection
          </h1>
          <p className="mt-2 text-muted-foreground">
            Equipment inspection screen — coming in the next phase.
          </p>
        </div>
      </section>
    </AppShell>
  );
}

import type { WorkOrderObjective } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ObjectivesListProps {
  objectives: WorkOrderObjective[];
  className?: string;
}

export function ObjectivesList({ objectives, className }: ObjectivesListProps) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
        Objectives
      </h2>
      <ul className="flex flex-col gap-3 rounded-lg border border-border/60 bg-card/50 px-5 py-4">
        {objectives.map((objective) => (
          <li
            key={objective.id}
            className="flex items-center gap-3 text-sm text-muted-foreground"
          >
            <span
              className="flex size-4 shrink-0 items-center justify-center text-base leading-none text-muted-foreground/80"
              aria-hidden
            >
              ☐
            </span>
            <span>{objective.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

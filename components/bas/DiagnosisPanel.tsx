"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useScenarioState } from "@/hooks";
import type { DiagnosisId } from "@/lib/types/scenario-progress";
import { cn } from "@/lib/utils";

interface DiagnosisPanelProps {
  className?: string;
}

export function DiagnosisPanel({ className }: DiagnosisPanelProps) {
  const {
    state,
    config,
    canDiagnose,
    diagnosisComplete,
    submitDiagnosis,
  } = useScenarioState();
  const [selectedId, setSelectedId] = useState<DiagnosisId | null>(null);
  const [attemptMessage, setAttemptMessage] = useState<string | null>(null);

  const discoveredClues = state.discoveredClues
    .map((clueId) => config.clues[clueId])
    .filter((clue): clue is NonNullable<typeof clue> => Boolean(clue));

  function handleSubmit() {
    if (!selectedId || !canDiagnose) {
      return;
    }

    const isCorrect = submitDiagnosis(selectedId);
    setAttemptMessage(
      isCorrect
        ? "Correct diagnosis recorded. Repair steps will be available in the next phase."
        : "That diagnosis does not match the collected evidence. Review your clues and BAS data.",
    );
  }

  return (
    <section
      className={cn(
        "flex flex-col rounded-lg border border-border/60 bg-card/40",
        className,
      )}
    >
      <header className="border-b border-border/60 px-4 py-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
          Diagnosis
        </h3>
      </header>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Evidence Collected
          </p>
          {discoveredClues.length === 0 ? (
            <p className="mt-2 text-sm text-muted-foreground">
              Inspect equipment and review BAS points to gather evidence.
            </p>
          ) : (
            <ul className="mt-2 flex flex-col gap-2">
              {discoveredClues.map((clue) => (
                <li
                  key={clue.id}
                  className="rounded-md border border-border/50 bg-muted/20 px-3 py-2"
                >
                  <p className="text-xs font-semibold text-foreground">
                    {clue.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {clue.description}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!canDiagnose ? (
          <p className="text-xs leading-relaxed text-muted-foreground">
            Collect all evidence before submitting a diagnosis. Inspect the
            outside air damper and review BAS damper and temperature points.
          </p>
        ) : null}

        {canDiagnose && !diagnosisComplete ? (
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Select Diagnosis
            </legend>
            {config.diagnosisOptions.map((option) => (
              <label
                key={option.id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition-colors",
                  selectedId === option.id
                    ? "border-primary/50 bg-primary/10 text-foreground"
                    : "border-border/50 text-muted-foreground hover:border-border hover:text-foreground",
                )}
              >
                <input
                  type="radio"
                  name="diagnosis"
                  value={option.id}
                  checked={selectedId === option.id}
                  onChange={() => setSelectedId(option.id)}
                  className="accent-primary"
                />
                {option.label}
              </label>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full"
              disabled={!selectedId}
              onClick={handleSubmit}
            >
              Submit Diagnosis
            </Button>
          </fieldset>
        ) : null}

        {diagnosisComplete ? (
          <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-3">
            <p className="text-sm font-semibold text-emerald-400">
              Diagnosis Complete
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Root cause identified: Outside Air Damper Stuck. Repair workflow
              coming in the next phase.
            </p>
          </div>
        ) : null}

        {attemptMessage && !diagnosisComplete ? (
          <p className="text-xs leading-relaxed text-amber-400">{attemptMessage}</p>
        ) : null}
      </div>
    </section>
  );
}

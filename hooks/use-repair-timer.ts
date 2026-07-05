"use client";

import { useEffect } from "react";

import {
  isRepairSequenceComplete,
  REPAIR_STEP_INTERVAL_MS,
} from "@/lib/simulation/repair-sequence";

interface UseRepairTimerOptions {
  repairPhase: "idle" | "repairing" | "complete";
  repairStepIndex: number;
  onAdvance: () => void;
  onComplete: () => void;
}

export function useRepairTimer({
  repairPhase,
  repairStepIndex,
  onAdvance,
  onComplete,
}: UseRepairTimerOptions) {
  useEffect(() => {
    if (repairPhase !== "repairing") {
      return;
    }

    if (isRepairSequenceComplete(repairStepIndex)) {
      onComplete();
      return;
    }

    const timer = window.setTimeout(() => {
      onAdvance();
    }, REPAIR_STEP_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [onAdvance, onComplete, repairPhase, repairStepIndex]);
}

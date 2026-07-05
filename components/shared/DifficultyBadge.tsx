import type { ScenarioDifficulty } from "@/lib/types";
import { cn } from "@/lib/utils";

const DIFFICULTY_STYLES: Record<ScenarioDifficulty, string> = {
  Beginner: "bg-primary/15 text-primary border-primary/25",
  Intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  Advanced: "bg-red-500/15 text-red-400 border-red-500/25",
};

interface DifficultyBadgeProps {
  difficulty: ScenarioDifficulty;
  className?: string;
}

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
        DIFFICULTY_STYLES[difficulty],
        className,
      )}
    >
      {difficulty}
    </span>
  );
}

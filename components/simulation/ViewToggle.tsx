import { ArrowLeftRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { BasViewMode } from "@/lib/types";

interface ViewToggleProps {
  activeView: BasViewMode;
  basUnlocked: boolean;
  onViewChange: (view: BasViewMode) => void;
  className?: string;
}

const VIEW_OPTIONS: { id: BasViewMode; label: string }[] = [
  { id: "ahu", label: "AHU View" },
  { id: "bas", label: "BAS Graphics" },
];

export function ViewToggle({
  activeView,
  basUnlocked,
  onViewChange,
  className,
}: ViewToggleProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 border-b border-border/60 bg-card/20 px-4 py-2.5",
        className,
      )}
    >
      {VIEW_OPTIONS.map((option) => {
        const isActive = activeView === option.id;
        const isDisabled = option.id === "bas" && !basUnlocked;

        return (
          <button
            key={option.id}
            type="button"
            disabled={isDisabled}
            onClick={() => onViewChange(option.id)}
            className={cn(
              "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
              isDisabled && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-muted-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
      <ArrowLeftRight
        className="size-4 text-muted-foreground"
        aria-hidden
      />
    </div>
  );
}

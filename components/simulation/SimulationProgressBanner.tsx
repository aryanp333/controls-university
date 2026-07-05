import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

interface SimulationProgressBannerProps {
  label: string | null;
  isActive: boolean;
  className?: string;
}

export function SimulationProgressBanner({
  label,
  isActive,
  className,
}: SimulationProgressBannerProps) {
  if (!isActive || !label) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <Loader2 className="size-4 shrink-0 animate-spin text-primary" aria-hidden />
      <p className="text-sm text-foreground">{label}</p>
    </div>
  );
}

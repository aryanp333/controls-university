import Link from "next/link";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TrainingTopNavProps {
  scenarioTitle: string;
  className?: string;
}

export function TrainingTopNav({ scenarioTitle, className }: TrainingTopNavProps) {
  return (
    <header
      className={cn(
        "relative flex h-14 shrink-0 items-center justify-between border-b border-border/60 bg-card/40 px-5 backdrop-blur-sm",
        className,
      )}
    >
      <Logo href={ROUTES.home} />
      <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Current Scenario
        </span>
        <p className="text-center text-sm font-semibold text-foreground">
          {scenarioTitle}
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        nativeButton={false}
        render={
          <Link href={ROUTES.scenarios}>Exit Training</Link>
        }
      />
    </header>
  );
}

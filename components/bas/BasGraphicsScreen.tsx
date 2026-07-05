import { AHU_2_BAS_SECTIONS, BAS_GRAPHICS_TITLE } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { BasPointSectionBlock } from "./BasPointSection";

interface BasGraphicsScreenProps {
  className?: string;
}

export function BasGraphicsScreen({ className }: BasGraphicsScreenProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-card/30",
        className,
      )}
    >
      <header className="border-b border-border/60 px-5 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          {BAS_GRAPHICS_TITLE}
        </h2>
        <p className="text-xs text-muted-foreground">
          Live points · North Ridge Office Building
        </p>
      </header>

      <div className="grid flex-1 gap-4 overflow-y-auto p-5 md:grid-cols-2">
        {AHU_2_BAS_SECTIONS.map((section) => (
          <BasPointSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

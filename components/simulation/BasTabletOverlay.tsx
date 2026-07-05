import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BasTabletOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function BasTabletOverlay({ open, onClose }: BasTabletOverlayProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bas-tablet-title"
    >
      <div
        className={cn(
          "relative flex w-full max-w-lg flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-2xl",
          "aspect-[4/3]",
        )}
      >
        <header className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-5 py-3">
          <div>
            <h2
              id="bas-tablet-title"
              className="text-sm font-bold uppercase tracking-wider text-foreground"
            >
              BAS Tablet
            </h2>
            <p className="text-xs text-muted-foreground">AHU-2 · Graphic Screen</p>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close BAS Tablet"
          >
            <X className="size-4" />
          </Button>
        </header>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
          <div className="size-16 rounded-full border-2 border-dashed border-primary/40 bg-primary/5" />
          <p className="text-sm font-medium text-foreground">
            BAS graphics will open here
          </p>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            Full point lists, trends, and graphic screens are available in the
            next training phase.
          </p>
        </div>
      </div>
    </div>
  );
}

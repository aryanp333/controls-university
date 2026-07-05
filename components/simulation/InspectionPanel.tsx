import type { EquipmentComponentInspection } from "@/lib/types";
import { cn } from "@/lib/utils";

interface InspectionPanelProps {
  component: EquipmentComponentInspection | null;
  emptyMessage: string;
  className?: string;
}

export function InspectionPanel({
  component,
  emptyMessage,
  className,
}: InspectionPanelProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col border-l border-border/60 bg-card/20",
        className,
      )}
    >
      <div className="border-b border-border/60 px-5 py-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
          Inspection Panel
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-5">
        {component ? (
          <>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {component.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {component.description}
              </p>
            </div>

            <InspectionDetail label="Status" value={component.status} highlight />

            <InspectionDetail
              label="Observation"
              value={component.observation}
              multiline
            />
          </>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {emptyMessage}
          </p>
        )}
      </div>
    </aside>
  );
}

interface InspectionDetailProps {
  label: string;
  value: string;
  highlight?: boolean;
  multiline?: boolean;
}

function InspectionDetail({
  label,
  value,
  highlight = false,
  multiline = false,
}: InspectionDetailProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <p
        className={cn(
          "rounded-md border border-border/60 bg-muted/20 px-3 py-2.5 text-sm",
          highlight ? "font-medium text-amber-400" : "text-foreground",
          multiline && "leading-relaxed",
        )}
      >
        {value}
      </p>
    </div>
  );
}

import type { WorkOrder } from "@/lib/types";

import { WorkOrderField } from "./WorkOrderField";
import { WorkOrderStatusBadge } from "./WorkOrderStatusBadge";

interface WorkOrderTicketProps {
  workOrder: WorkOrder;
}

export function WorkOrderTicket({ workOrder }: WorkOrderTicketProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border/80 bg-card shadow-sm">
      <header className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-6 py-4">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Work Order
          </h1>
          <span className="font-mono text-xs text-muted-foreground">
            {workOrder.id}
          </span>
        </div>
        <div className="hidden h-px flex-1 mx-8 bg-border/60 sm:block" aria-hidden />
      </header>

      <dl className="grid gap-5 px-6 py-6 sm:grid-cols-2">
        <WorkOrderField label="Customer" value={workOrder.customer} />
        <WorkOrderField label="Location" value={workOrder.location} />
        <WorkOrderField label="Equipment" value={workOrder.equipment} />
        <WorkOrderField label="Reported By" value={workOrder.reportedBy} />
        <WorkOrderStatusBadge
          label="Priority"
          variant="priority"
          value={workOrder.priority}
        />
        <WorkOrderStatusBadge
          label="Status"
          variant="status"
          value={workOrder.status}
        />
      </dl>

      <div className="border-t border-border/60 bg-muted/10 px-6 py-5">
        <WorkOrderField
          label="Problem Description"
          value={workOrder.problemDescription}
          multiline
        />
      </div>
    </article>
  );
}

import { AppShell } from "@/components/layout";
import {
  Logo,
  ObjectivesList,
  WorkOrderActions,
  WorkOrderTicket,
} from "@/components/shared";
import {
  AHU_ECONOMIZER_OBJECTIVES,
  AHU_ECONOMIZER_WORK_ORDER,
} from "@/lib/constants";

export default function WorkOrderPage() {
  return (
    <AppShell>
      <section className="px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <Logo href="/" />
          <WorkOrderTicket workOrder={AHU_ECONOMIZER_WORK_ORDER} />
          <ObjectivesList objectives={AHU_ECONOMIZER_OBJECTIVES} />
          <WorkOrderActions />
        </div>
      </section>
    </AppShell>
  );
}

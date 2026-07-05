import type { WorkOrder, WorkOrderObjective } from "@/lib/types/work-order";

export const AHU_ECONOMIZER_WORK_ORDER: WorkOrder = {
  id: "WO-2026-0142",
  customer: "North Ridge Office Building",
  location: "Mechanical Room 2",
  equipment: "AHU-2",
  priority: "Medium",
  status: "Active",
  reportedBy: "Building Engineer",
  problemDescription:
    "The building automation system has reported that AHU-2 is unable to maintain outside air temperature. Occupants have reported poor ventilation. Investigate the unit and restore normal operation.",
};

export const AHU_ECONOMIZER_OBJECTIVES: WorkOrderObjective[] = [
  { id: "inspect-equipment", label: "Inspect equipment" },
  { id: "open-bas-graphics", label: "Open BAS graphics" },
  { id: "diagnose-fault", label: "Diagnose fault" },
  { id: "restore-operation", label: "Restore operation" },
];

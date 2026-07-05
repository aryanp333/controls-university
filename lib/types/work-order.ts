export type WorkOrderPriority = "Low" | "Medium" | "High" | "Critical";

export type WorkOrderStatus = "Active" | "Pending" | "Complete";

export interface WorkOrder {
  id: string;
  customer: string;
  location: string;
  equipment: string;
  priority: WorkOrderPriority;
  status: WorkOrderStatus;
  reportedBy: string;
  problemDescription: string;
}

export interface WorkOrderObjective {
  id: string;
  label: string;
}

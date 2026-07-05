import { ScenarioProvider } from "@/context";
import { InspectionWorkspace } from "@/components/simulation";

export default function InspectionPage() {
  return (
    <ScenarioProvider>
      <InspectionWorkspace />
    </ScenarioProvider>
  );
}

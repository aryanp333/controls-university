import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export function WorkOrderActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <Button
        size="lg"
        className="h-11 min-w-[180px] px-6 text-sm"
        nativeButton={false}
        render={<Link href={ROUTES.inspection}>Accept Work Order</Link>}
      />
      <Button
        variant="outline"
        size="lg"
        className="h-11 min-w-[180px] px-6 text-sm"
        nativeButton={false}
        render={<Link href={ROUTES.scenarios}>Back to Scenarios</Link>}
      />
    </div>
  );
}

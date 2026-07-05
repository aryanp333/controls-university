import { SCENARIOS_PAGE } from "@/lib/constants";

import { Logo } from "./Logo";

export function ScenariosPageHeader() {
  return (
    <header className="flex flex-col gap-4">
      <Logo href="/" />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {SCENARIOS_PAGE.title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          {SCENARIOS_PAGE.subtitle}
        </p>
      </div>
    </header>
  );
}

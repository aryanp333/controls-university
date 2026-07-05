import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        {APP_NAME}
      </span>
      {showTagline ? (
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          BAS Training
        </span>
      ) : null}
    </div>
  );
}

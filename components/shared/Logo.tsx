import Link from "next/link";

import { APP_NAME, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  href?: string | null;
}

export function Logo({
  className,
  showTagline = false,
  href = null,
}: LogoProps) {
  const content = (
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

  if (href === null) {
    return content;
  }

  return (
    <Link
      href={href ?? ROUTES.home}
      className="w-fit transition-opacity hover:opacity-80"
    >
      {content}
    </Link>
  );
}

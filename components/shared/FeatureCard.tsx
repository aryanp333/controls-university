import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-4 rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-card/80",
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
        <Icon className="size-5" aria-hidden />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}

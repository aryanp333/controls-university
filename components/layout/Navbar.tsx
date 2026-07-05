import { ArrowRight } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { LANDING_HERO, LANDING_NAV_LINKS } from "@/lib/constants/landing";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {LANDING_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button size="sm" className="hidden md:inline-flex">
          {LANDING_HERO.primaryCta}
          <ArrowRight className="size-3.5" data-icon="inline-end" />
        </Button>
      </div>
    </header>
  );
}

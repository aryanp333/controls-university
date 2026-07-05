import { Logo } from "@/components/shared/Logo";
import { APP_NAME } from "@/lib/constants";
import { LANDING_NAV_LINKS } from "@/lib/constants/landing";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-border/40 bg-muted/10 px-6 py-10 md:px-10",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-6">
          {LANDING_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © {year} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

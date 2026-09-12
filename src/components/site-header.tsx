import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.32em] uppercase transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={site.links.shop} target="_blank" rel="noopener noreferrer">
              Shop
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}

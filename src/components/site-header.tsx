import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/section";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.32em] transition-opacity hover:opacity-70 sm:text-xl"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <a
              href={site.links.shop.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.links.shop.label}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}

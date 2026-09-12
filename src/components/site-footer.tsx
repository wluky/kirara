import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { Separator } from "@/components/ui/separator";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex max-w-sm flex-col gap-3">
            <span className="font-display text-lg uppercase tracking-[0.32em]">
              {site.name}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
          </div>

          <nav
            className="flex flex-col gap-3 text-sm"
            aria-label="Footer"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.links.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              Shop
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </a>
          </nav>
        </div>

        <Separator />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Crafted with elegance and
          care.
        </p>
      </Container>
    </footer>
  );
}

import { Container, Rule } from "@/components/section";
import { InstagramIcon } from "@/components/icons";
import { copyrightLine, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <Container className="flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <Rule className="w-24" />

        <span className="font-display text-lg tracking-[0.32em]">
          {site.name}
        </span>

        <a
          href={site.links.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm underline decoration-blossom-ink decoration-2 underline-offset-[6px] transition-colors hover:text-muted-foreground"
        >
          <InstagramIcon className="size-4" />
          {site.links.instagram.label}
        </a>

        <p className="text-xs text-muted-foreground">{copyrightLine()}</p>
      </Container>
    </footer>
  );
}

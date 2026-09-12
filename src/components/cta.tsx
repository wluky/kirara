import { ArrowUpRight } from "lucide-react";

import { Container, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <Section className="pb-8 pt-4 sm:pb-12 sm:pt-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center sm:px-16 sm:py-16">
          <div
            aria-hidden
            className="blossom-glow pointer-events-none absolute inset-x-0 -bottom-[45%] h-[40rem] opacity-90"
          />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6">
            <h2 className="text-balance font-display text-3xl leading-[1.15] sm:text-[2.5rem]">
              Bring the blossom home
            </h2>
            <p className="text-pretty text-muted-foreground">
              The Tone Brightening Lotion ships from our official store, in the
              same 100 ml tube you see here.
            </p>
            <Button asChild size="lg">
              <a
                href={site.links.shop}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop now
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

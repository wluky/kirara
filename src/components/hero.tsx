import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container, Rule } from "@/components/section";
import { Button } from "@/components/ui/button";
import { product, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Blossom light behind the composition. */}
      <div
        aria-hidden
        className="blossom-glow pointer-events-none absolute -top-56 right-[-30%] size-[34rem] opacity-60 sm:-top-40 sm:right-[-8%] sm:size-[46rem] sm:opacity-70"
      />

      <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:py-24">
        <div className="animate-rise flex flex-col items-start gap-8">
          <Rule />

          <h1 className="text-balance font-display text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {product.name}
          </h1>

          <p className="max-w-xl text-pretty text-base leading-[1.75] text-muted-foreground sm:text-lg">
            {product.description}
          </p>

          <Button asChild size="lg" className="mt-2">
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

        <div className="animate-rise relative mx-auto w-full max-w-md [animation-delay:120ms] lg:max-w-none">
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-40px_oklch(0.3_0.05_15/0.55)]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              width={product.image.width}
              height={product.image.height}
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 90vw"
              className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

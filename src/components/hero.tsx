import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

import { Container, Eyebrow } from "@/components/section";
import { Badge } from "@/components/ui/badge";
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

      <Container className="relative grid items-center gap-14 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:py-24">
        <div className="animate-rise flex flex-col items-start gap-7">
          <Eyebrow>{site.tagline}</Eyebrow>

          <h1 className="text-balance font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[4rem]">
            The gentle touch of sakura,{" "}
            <em className="text-blossom-ink not-italic">every day</em>.
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {product.intro}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a
                href={site.links.shop}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shop the lotion
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#ritual">See the ritual</a>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {product.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="size-4 text-leaf" aria-hidden />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise relative mx-auto w-full max-w-md [animation-delay:120ms] lg:max-w-none">
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-40px_oklch(0.3_0.05_15/0.55)]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              width={product.image.width}
              height={product.image.height}
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
          </figure>

          <Badge
            variant="outline"
            className="absolute -bottom-5 left-4 gap-3 bg-background/90 py-2.5 pl-4 pr-5 shadow-sm backdrop-blur-md sm:left-6"
          >
            <span className="size-2 rounded-full bg-blossom-ink" aria-hidden />
            <span className="font-display text-sm text-foreground">
              {product.name}
            </span>
            {product.volume}
          </Badge>
        </div>
      </Container>
    </section>
  );
}

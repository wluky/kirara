import type * as React from "react";

import { cn } from "@/lib/utils";

/** Page gutter and max width, defined once. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("scroll-mt-16 py-16 sm:py-24", className)}
      {...props}
    />
  );
}

function Eyebrow({ className, children, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("eyebrow", className)} {...props}>
      <span aria-hidden className="h-px w-8 bg-blossom-ink/70" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance font-display text-3xl leading-[1.15] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { Container, Section, SectionHeading, Eyebrow };

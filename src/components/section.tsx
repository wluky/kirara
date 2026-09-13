import type * as React from "react";

import { cn } from "@/lib/utils";

/** Page gutter and max width, defined once. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

/** The hairline rule the brand uses to open a block of type. */
export function Rule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("block h-px w-16 bg-blossom-ink/70", className)}
    />
  );
}

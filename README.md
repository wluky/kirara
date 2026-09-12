# Kirara

Marketing site for **Kirara**, a body-care brand whose signature product is the
Tone Brightening Lotion (green caviar extract, six-type ceramide, 100 ml).

![Kirara Tone Brightening Lotion](public/kirara-lotion.jpeg)

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS v4 — CSS-first, no `tailwind.config.js` |
| Components | [shadcn/ui](https://ui.shadcn.com) (Radix primitives, owned in `src/components/ui`) |
| Icons | lucide-react |
| Fonts | Playfair Display (display) + Inter (body), self-hosted via `next/font` |
| Theming | `next-themes`, class strategy, light + dark |
| Language | TypeScript |
| Package manager | pnpm |

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (flat config) |
| `pnpm typecheck` | `tsc --noEmit` |

Set `NEXT_PUBLIC_SITE_URL` in the deployment so Open Graph URLs resolve
absolutely; it falls back to `http://localhost:3000`.

## Project structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, base layer, custom utilities
│   ├── layout.tsx        # Fonts, metadata, theme provider
│   └── page.tsx          # Composes the sections below
├── components/
│   ├── ui/               # shadcn/ui primitives (button, card, badge, …)
│   ├── section.tsx       # Container / Section / SectionHeading / Eyebrow
│   ├── site-header.tsx   # hero.tsx, benefits.tsx, ritual.tsx, faq.tsx,
│   └── …                 # cta.tsx, site-footer.tsx, theme-toggle.tsx
└── lib/
    ├── site.ts           # All copy, links and product data
    └── utils.ts          # `cn()` class merger
```

Two rules keep the codebase small:

- **Copy lives in `src/lib/site.ts`.** Section components render data; they do
  not hard-code product text or URLs. Editing the brand means editing one file.
- **Style lives in tokens.** Colours, radii, fonts and animations are CSS
  variables in `src/app/globals.css`, exposed to Tailwind through
  `@theme inline`. Components use token utilities (`bg-card`,
  `text-muted-foreground`, `text-blossom-ink`), never raw hex values.

## Design tokens

The palette is defined in oklch on `:root` and overridden under `.dark`, using
the shadcn token names plus two brand extras:

- `--blossom` — the sakura light source behind hero and CTA artwork.
- `--blossom-ink` — the readable version of that pink, for type and icons.
  Every text/background pair on the page clears WCAG AA in both themes.

## Adding a shadcn component

```bash
pnpm dlx shadcn@latest add <component>
```

Components land in `src/components/ui` and are yours to edit — `button.tsx`, for
example, has been adjusted to pill radii to match the brand.

## Deployment

Any Node host or static-friendly platform works; the site prerenders to static
output. Vercel needs no configuration beyond `NEXT_PUBLIC_SITE_URL`.

## Licence

Private and proprietary. All rights reserved.

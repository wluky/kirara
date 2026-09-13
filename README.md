# Kirara

Marketing site for **Kirara**, a luxury skincare brand. One page: the Signature
Body Lotion.

![Kirara Signature Body Lotion](public/kirara-lotion.jpeg)

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
│   └── page.tsx          # Header + hero + footer
├── components/
│   ├── ui/               # shadcn/ui primitives (button)
│   ├── section.tsx       # Container and the brand hairline rule
│   ├── hero.tsx
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── icons.tsx         # Brand marks lucide does not ship
│   └── theme-*.tsx       # next-themes provider and toggle
└── lib/
    ├── site.ts           # All copy, links and product data
    └── utils.ts          # `cn()` class merger
```

Two rules keep the codebase small:

- **Copy lives in `src/lib/site.ts`.** Components render that data and never
  hard-code text of their own. The wording there is legally approved — treat it
  as fixed, and route any addition or edit through sign-off before changing it.
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
example, has been adjusted to pill radii to match the brand. Only the primitives
the page actually uses are kept in the repo.

## Deployment

Any Node host or static-friendly platform works; the site prerenders to static
output. Vercel needs no configuration beyond `NEXT_PUBLIC_SITE_URL`.

## Licence

Private and proprietary. All rights reserved.

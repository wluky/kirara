/**
 * Every string the site renders, and every outbound link, lives here.
 *
 * The copy below is the brand's approved wording, reproduced verbatim from the
 * previous site. Nothing may be added or reworded without legal sign-off, so
 * the section components render this data and never hard-code text of their own.
 */
export const site = {
  name: "KIRARA",
  /** Set NEXT_PUBLIC_SITE_URL in the deployment so metadata resolves absolute URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Kirara - Luxury Skincare",
  description:
    "Nourish your skin with the gentle touch of sakura. Premium body lotion with natural Japanese ingredients.",
  /** Rendered by `copyrightLine()` below; the year is never stored as text. */
  copyrightNotice: "Kirara. Crafted with elegance and care.",
  links: {
    shop: {
      label: "Shop Now",
      href: "https://shopee.co.id/Kirara-Tone-Brightening-Lotion-New-FORMULA-Green-Caviar-Extract-100-ml-i.1535422870.42600156189",
    },
    instagram: {
      label: "Follow us on Instagram",
      href: "https://www.instagram.com/kirara_beautycare/",
    },
  },
} as const;

/**
 * "© {year} Kirara. Crafted with elegance and care." with the year taken from
 * the clock at render time, so it never has to be edited by hand.
 */
export function copyrightLine(now: Date = new Date()) {
  return `© ${now.getFullYear()} ${site.copyrightNotice}`;
}

export const product = {
  name: "Signature Body Lotion",
  description:
    "Immerse yourself in the delicate fragrance of cherry blossoms with our premium body lotion. Enriched with natural moisturizers and sakura extract, it provides long-lasting hydration while leaving your skin with a subtle, elegant scent.",
  image: {
    src: "/kirara-lotion.jpeg",
    alt: "Kirara Signature Body Lotion",
    width: 984,
    height: 1280,
  },
} as const;

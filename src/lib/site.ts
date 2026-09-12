import { Droplets, Flower2, ShieldCheck, Waves, type LucideIcon } from "lucide-react";

/**
 * Every piece of marketing copy and every outbound link lives here, so the
 * section components stay presentational and the brand can be edited in one file.
 * Product facts below follow what is printed on the bottle.
 */
export const site = {
  name: "Kirara",
  /** Set NEXT_PUBLIC_SITE_URL in the deployment so metadata resolves absolute URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Tone brightening body care",
  description:
    "Nourish your skin with the gentle touch of sakura. A tone brightening body lotion with green caviar extract and a six-type ceramide complex.",
  links: {
    shop: "https://shopee.co.id/Kirara-Tone-Brightening-Lotion-New-FORMULA-Green-Caviar-Extract-100-ml-i.1535422870.42600156189",
    instagram: "https://www.instagram.com/kirara_beautycare/",
  },
} as const;

export const nav = [
  { href: "#benefits", label: "Why it works" },
  { href: "#ritual", label: "The ritual" },
  { href: "#faq", label: "FAQ" },
] as const;

export const product = {
  name: "Tone Brightening Lotion",
  volume: "100 ml",
  image: {
    src: "/kirara-lotion.jpeg",
    alt: "A tube of Kirara Tone Brightening Lotion resting on a swirl of cream",
    width: 984,
    height: 1280,
  },
  intro:
    "A featherlight body lotion built around green caviar extract and a six-type ceramide complex. Skin is left hydrated, comfortable and evenly bright — with the quiet cherry-blossom character Kirara is known for.",
  highlights: ["Green caviar extract", "6-type ceramide", "100 ml"],
} as const;

export type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: Waves,
    title: "Green caviar extract",
    description:
      "Sea grapes, the formula's hero ingredient, chosen for how much moisture they carry into the skin.",
  },
  {
    icon: ShieldCheck,
    title: "Six-type ceramide",
    description:
      "A ceramide complex that helps skin hold on to the moisture it already has.",
  },
  {
    icon: Droplets,
    title: "Light, not greasy",
    description:
      "Rich enough for dry patches, light enough to sink in without leaving a film behind.",
  },
  {
    icon: Flower2,
    title: "Made for every skin type",
    description:
      "Gentle and non-irritating, so it sits as comfortably on sensitive skin as it does on dry skin.",
  },
];

export const ritual = [
  {
    step: "01",
    title: "Warm",
    description:
      "Press a coin-sized amount between your palms until the lotion turns silky.",
  },
  {
    step: "02",
    title: "Smooth",
    description:
      "Work upward in long strokes over damp skin, finishing at elbows, knees and heels.",
  },
  {
    step: "03",
    title: "Rest",
    description:
      "Give it a minute to settle before you dress. Reapply anywhere that still feels tight.",
  },
] as const;

export const faqs = [
  {
    question: "How often should I use it?",
    answer:
      "Morning and night, or any time skin feels dry. It is light enough for daily use over the whole body.",
  },
  {
    question: "What exactly is green caviar?",
    answer:
      "Green caviar is another name for sea grapes, a sea vegetable used in the formula for how well it holds water — the reason the lotion feels hydrating without feeling heavy.",
  },
  {
    question: "Will it work on sensitive skin?",
    answer:
      "The formula is gentle and non-irritating and suits all skin types. As with any new product, patch test first if your skin reacts easily.",
  },
  {
    question: "Where can I buy Kirara?",
    answer:
      "The Tone Brightening Lotion is available through our official Shopee store, and new drops are announced first on Instagram.",
  },
] as const;

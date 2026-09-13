import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/**
 * The page is fully static, so the copyright year would otherwise freeze at the
 * year of the last deploy. Regenerating once a day keeps it correct across a New
 * Year without anyone having to ship a commit.
 */
export const revalidate = 86_400;

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
      </main>
      <SiteFooter />
    </div>
  );
}

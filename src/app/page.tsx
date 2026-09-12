import { Benefits } from "@/components/benefits";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Ritual } from "@/components/ritual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Ritual />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  );
}

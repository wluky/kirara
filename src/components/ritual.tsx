import { Container, Section, SectionHeading } from "@/components/section";
import { ritual } from "@/lib/site";

export function Ritual() {
  return (
    <Section id="ritual" className="border-y border-border bg-secondary/40">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="The ritual"
          title="Three minutes, start to finish"
          description="How to get the most out of the lotion — best applied while skin is still warm from the shower."
        />

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {ritual.map(({ step, title, description }) => (
            <li key={step} className="flex flex-col gap-4 border-t border-border pt-6">
              <span className="font-display text-sm tracking-[0.3em] text-blossom-ink">
                {step}
              </span>
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

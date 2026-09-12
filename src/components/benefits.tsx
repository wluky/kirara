import { Container, Section, SectionHeading } from "@/components/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <Section id="benefits">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why it works"
          title="Care that is quiet, not complicated"
          description="One bottle, four things it does well. No twelve-step routine, no noise."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-blossom/60 hover:shadow-[0_18px_40px_-28px_oklch(0.3_0.05_15/0.45)]"
            >
              <CardHeader className="gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-blossom-ink ring-1 ring-inset ring-border">
                  <Icon className="size-5" aria-hidden />
                </span>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

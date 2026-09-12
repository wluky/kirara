import { Container, Section, Eyebrow } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InstagramIcon } from "@/components/icons";
import { faqs, site } from "@/lib/site";

export function Faq() {
  return (
    <Section id="faq">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="text-balance font-display text-3xl leading-[1.15] sm:text-4xl">
            Questions, answered
          </h2>
          <p className="text-muted-foreground">
            Anything we have missed? Send us a message — we answer every one.
          </p>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm underline decoration-blossom-ink decoration-2 underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            <InstagramIcon className="size-4" />
            Ask us on Instagram
          </a>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}

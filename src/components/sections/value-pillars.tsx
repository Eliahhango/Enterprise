import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ValuePillar = {
  title: string;
  body: string;
};

type ValuePillarsProps = {
  eyebrow: string;
  title: string;
  body: string;
  items: ValuePillar[];
};

export function ValuePillars({
  eyebrow,
  title,
  body,
  items,
}: ValuePillarsProps) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Card key={item.title}>
              <div className="inline-flex rounded-full border border-brand-gold/25 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                0{index + 1}
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-stone/74 md:text-base">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

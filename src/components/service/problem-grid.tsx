import type { ServiceContentItem, ServicePageData } from "@/lib/services";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ProblemGridProps = {
  service: ServicePageData;
  items: ServiceContentItem[];
};

export function ProblemGrid({ service, items }: ProblemGridProps) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Problems We Solve"
          title={`${service.name} works best when it solves the real pressure behind the request.`}
          body="Each service page is framed around practical client concerns so the offer feels consultative rather than generic."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title}>
              <div className={`inline-flex h-3 w-3 rounded-full ${service.theme.dotClass}`} />
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                {item.title}
              </h2>
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

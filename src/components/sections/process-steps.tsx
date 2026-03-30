import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ProcessStep = {
  title: string;
  body: string;
};

type ProcessStepsProps = {
  eyebrow: string;
  title: string;
  body: string;
  items: ProcessStep[];
  cta: {
    href: string;
    label: string;
  };
};

export function ProcessSteps({
  eyebrow,
  title,
  body,
  items,
  cta,
}: ProcessStepsProps) {
  return (
    <Section id="process">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} body={body} />
            <Link className={buttonClasses({ variant: "secondary", className: "mt-8" })} href={cta.href}>
              {cta.label}
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item, index) => (
              <Card key={item.title} className="relative">
                <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                  Step 0{index + 1}
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
        </div>
      </Container>
    </Section>
  );
}

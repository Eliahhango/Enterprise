import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Industry = {
  title: string;
  summary: string;
};

type IndustryGridProps = {
  eyebrow: string;
  title: string;
  body: string;
  items: Industry[];
  cta: {
    href: string;
    label: string;
  };
};

export function IndustryGrid({
  eyebrow,
  title,
  body,
  items,
  cta,
}: IndustryGridProps) {
  return (
    <Section tone="light" id="industries">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={eyebrow} title={title} body={body} />
          <Link className={buttonClasses({ variant: "ghost" })} href={cta.href}>
            {cta.label}
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} tone="light" className="border-brand-slate/14">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                {item.summary}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

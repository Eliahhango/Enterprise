import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ProblemSolutionBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  problems: string[];
  outcomes: string[];
  cta: {
    href: string;
    label: string;
  };
};

export function ProblemSolutionBlock({
  eyebrow,
  title,
  body,
  problems,
  outcomes,
  cta,
}: ProblemSolutionBlockProps) {
  return (
    <Section tone="light" id="value">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <SectionHeading eyebrow={eyebrow} title={title} body={body} />
          <div className="grid gap-5">
            <Card tone="light" className="border-brand-slate/14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-copper">
                Common Friction
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-brand-ink/76 md:text-base">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-copper" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card tone="light" className="border-brand-slate/14 bg-brand-ink text-brand-ivory shadow-[0_24px_60px_rgba(7,14,26,0.14)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                What Better Delivery Changes
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-brand-stone/74 md:text-base">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link className={buttonClasses({ className: "mt-7 self-start" })} href={cta.href}>
                {cta.label}
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

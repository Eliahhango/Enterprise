import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type CaseStudy = {
  title: string;
  sector: string;
  challenge: string;
  result: string;
  href: string;
};

type CaseStudyPreviewGridProps = {
  eyebrow: string;
  title: string;
  body: string;
  featured: CaseStudy;
  items: CaseStudy[];
  cta: {
    href: string;
    label: string;
  };
};

export function CaseStudyPreviewGrid({
  eyebrow,
  title,
  body,
  featured,
  items,
  cta,
}: CaseStudyPreviewGridProps) {
  return (
    <Section id="case-studies">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={eyebrow} title={title} body={body} />
          <Link className={buttonClasses({ variant: "secondary" })} href={cta.href}>
            {cta.label}
          </Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Card className="overflow-hidden border-brand-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-brand-gold/20 bg-brand-gold/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Featured Work
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-stone/66">
                {featured.sector}
              </div>
            </div>
            <h3 className="mt-6 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-brand-ivory">
              {featured.title}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">Challenge</p>
                <p className="mt-3 text-sm leading-7 text-brand-stone/76 md:text-base">
                  {featured.challenge}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">Outcome</p>
                <p className="mt-3 text-sm leading-7 text-brand-stone/76 md:text-base">
                  {featured.result}
                </p>
              </div>
            </div>
            <Link
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory transition hover:text-brand-gold"
              href={featured.href}
            >
              Discuss Similar Work
              <span className="text-brand-gold">/</span>
            </Link>
          </Card>
          <div className="grid gap-5">
            {items.map((item) => (
              <Card key={item.title}>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-stone/66">
                  {item.sector}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-stone/74 md:text-base">
                  {item.challenge}
                </p>
                <p className="mt-4 border-l border-brand-gold/25 pl-4 text-sm leading-7 text-brand-stone/78 md:text-base">
                  {item.result}
                </p>
                <Link
                  className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory transition hover:text-brand-gold"
                  href={item.href}
                >
                  Discuss Similar Work
                  <span className="text-brand-gold">/</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

import Link from "next/link";

import type { ServicePageData } from "@/lib/services";
import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type ServiceHeroProps = {
  service: ServicePageData;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <Section className="relative overflow-hidden pb-12 pt-16 md:pb-16 md:pt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:items-end">
          <div className="max-w-3xl">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${service.theme.badgeClass}`}>
              {service.eyebrow}
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-brand-ivory sm:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-stone/78 md:text-xl">
              {service.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className={buttonClasses({ size: "lg" })} href="/contact">
                {service.primaryCtaLabel}
              </Link>
              <Link
                className={buttonClasses({ size: "lg", variant: "secondary" })}
                href="#process"
              >
                {service.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <Card className={`border ${service.theme.borderClass} bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]`}>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">
              {service.heroPanelTitle}
            </p>
            <div className="mt-6 grid gap-4">
              {service.heroPanelItems.map((item, index) => (
                <div
                  key={item}
                  className={`grid gap-4 rounded-[18px] border border-white/8 p-5 ${service.theme.surfaceClass} sm:grid-cols-[48px_minmax(0,1fr)] sm:items-start`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] font-display text-sm font-semibold text-brand-ivory">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-brand-stone/76 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

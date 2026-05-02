import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.4fr_0.8fr] md:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
            [Company Name]
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory md:text-3xl">
            Structured digital, design, security, and engineering delivery under one standard.
          </h2>
          <p className="mt-4 text-sm leading-7 text-brand-stone/72 md:text-base">
            Premium multidisciplinary support for organizations that need stronger systems, better presentation, clearer delivery, and a more dependable partner.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className={buttonClasses()} href="/contact">
              Request Consultation
            </Link>
            <Link className={buttonClasses({ variant: "secondary" })} href="/services">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-stone/55">
              Navigation
            </p>
            <ul className="mt-4 space-y-3 text-sm text-brand-stone/80">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-brand-ivory" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-stone/55">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-brand-stone/80">
              <li>[Email Address]</li>
              <li>[Phone Number]</li>
              <li>[Office Location]</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

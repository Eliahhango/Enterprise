import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/88 backdrop-blur-md">
      <Container className="relative flex min-h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-brand-gold/30 bg-gradient-to-br from-brand-gold/20 to-brand-teal/20 font-display text-sm font-semibold text-brand-ivory">
            CN
          </span>
          <span>
            <span className="block font-display text-lg font-semibold tracking-[-0.03em] text-brand-ivory">
              [Company Name]
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-brand-stone/70">
              Premium Multi-Service Company
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-brand-stone transition hover:text-brand-ivory"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className={buttonClasses({
              variant: "secondary",
              className: "hidden sm:inline-flex",
            })}
            href="/contact"
          >
            Request Consultation
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

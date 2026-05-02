"use client";

import Link from "next/link";
import { useState } from "react";

import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-site-nav"
        aria-expanded={open}
        className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.03] text-brand-ivory transition hover:border-brand-gold/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/30"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="flex flex-col gap-1.5">
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "translate-y-2 rotate-45")} />
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 rounded-full bg-current transition", open && "-translate-y-2 -rotate-45")} />
        </div>
      </button>
      <div
        className={cn(
          "absolute inset-x-5 top-[calc(100%+0.75rem)] rounded-[20px] border border-white/12 bg-brand-ink/95 p-5 shadow-[0_24px_80px_rgba(4,8,18,0.45)] backdrop-blur-sm transition duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
        id="mobile-site-nav"
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="rounded-[14px] px-4 py-3 text-sm font-medium text-brand-ivory/80 transition hover:bg-white/[0.04] hover:text-brand-ivory"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className={buttonClasses({ className: "mt-4 w-full", size: "lg" })}
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Request Consultation
        </Link>
      </div>
    </div>
  );
}

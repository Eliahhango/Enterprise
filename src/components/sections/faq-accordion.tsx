"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03]"
          >
            <button
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="font-display text-xl font-semibold tracking-[-0.03em] text-brand-ivory">
                {item.question}
              </span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-lg text-brand-gold transition",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-200",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-brand-stone/74 md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

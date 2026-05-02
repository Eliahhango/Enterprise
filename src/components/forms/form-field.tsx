import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const inputBaseClasses =
  "mt-3 w-full rounded-[10px] border border-white/12 bg-white/[0.03] px-4 text-base text-brand-ivory placeholder:text-brand-stone/40 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/25";

export const inputStateClasses = {
  default: "focus-visible:border-brand-gold/40",
  error: "border-[#b64545]/70 focus-visible:border-[#b64545]/70 focus-visible:ring-[#b64545]/20",
};

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  helpText?: string;
  error?: string;
  children: ReactNode;
};

export function FormField({
  label,
  htmlFor,
  required = false,
  helpText,
  error,
  children,
}: FormFieldProps) {
  const descriptionId = `${htmlFor}-description`;
  const errorId = `${htmlFor}-error`;

  return (
    <div>
      <label className="text-sm font-semibold text-brand-ivory" htmlFor={htmlFor}>
        {label}
        {required ? <span className="ml-1 text-brand-gold">*</span> : null}
      </label>
      {children}
      {helpText ? (
        <p className="mt-2 text-sm leading-6 text-brand-stone/68" id={descriptionId}>
          {helpText}
        </p>
      ) : null}
      {error ? (
        <p className="mt-2 text-sm leading-6 text-[#f0b1b1]" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function getInputClassName(hasError?: boolean, className?: string) {
  return cn(
    inputBaseClasses,
    hasError ? inputStateClasses.error : inputStateClasses.default,
    className,
  );
}

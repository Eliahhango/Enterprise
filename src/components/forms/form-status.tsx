import type { ContactActionState } from "@/lib/validation/contact";

import { cn } from "@/lib/utils";

type FormStatusProps = {
  state: ContactActionState;
  className?: string;
};

export function FormStatus({ state, className }: FormStatusProps) {
  if (!state.message) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      className={cn(
        "rounded-[16px] border px-4 py-3 text-sm leading-6",
        state.status === "error"
          ? "border-[#b64545]/45 bg-[#b64545]/10 text-[#f5d1d1]"
          : "border-brand-teal/30 bg-brand-teal/10 text-brand-ivory",
        className,
      )}
      role={state.status === "error" ? "alert" : "status"}
    >
      {state.message}
    </div>
  );
}

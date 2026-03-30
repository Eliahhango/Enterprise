"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  idleLabel: string;
  pendingLabel?: string;
};

export function SubmitButton({
  idleLabel,
  pendingLabel = "Sending...",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full sm:w-auto" disabled={pending} size="lg" type="submit">
      {pending ? pendingLabel : idleLabel}
    </Button>
  );
}

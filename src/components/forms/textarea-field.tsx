import { FormField, getInputClassName } from "@/components/forms/form-field";

type TextareaFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  required?: boolean;
  helpText?: string;
  error?: string;
  onChange: (value: string) => void;
};

export function TextareaField({
  id,
  name,
  label,
  value,
  required = false,
  helpText,
  error,
  onChange,
}: TextareaFieldProps) {
  return (
    <FormField error={error} helpText={helpText} htmlFor={id} label={label} required={required}>
      <textarea
        aria-invalid={Boolean(error)}
        className={getInputClassName(Boolean(error), "min-h-[160px] py-4")}
        id={id}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </FormField>
  );
}

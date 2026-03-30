import { FormField, getInputClassName } from "@/components/forms/form-field";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  options: SelectOption[];
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
};

export function SelectField({
  id,
  name,
  label,
  value,
  options,
  required = false,
  error,
  onChange,
}: SelectFieldProps) {
  return (
    <FormField error={error} htmlFor={id} label={label} required={required}>
      <select
        aria-invalid={Boolean(error)}
        className={getInputClassName(Boolean(error), "h-14 appearance-none")}
        id={id}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        <option value="">Select a service</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}

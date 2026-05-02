export const contactServiceOptions = [
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "web-development", label: "Web Development" },
  { value: "graphics-design", label: "Graphics & Design" },
  { value: "civil-engineering", label: "Civil Engineering" },
  { value: "multiple-services", label: "Multiple Services" },
  { value: "general-inquiry", label: "General Inquiry" },
] as const;

export type ContactServiceValue = (typeof contactServiceOptions)[number]["value"];

export type ContactFormValues = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
  startedAt: string;
};

export type ContactFieldName = keyof Pick<
  ContactFormValues,
  "fullName" | "email" | "phone" | "service" | "message"
>;

export type ContactFieldErrors = Partial<Record<ContactFieldName, string>>;

export type ContactActionState = {
  status: "idle" | "error";
  message: string;
  fieldErrors: ContactFieldErrors;
};

export const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export function getEmptyContactValues(): Omit<ContactFormValues, "website" | "startedAt"> {
  return {
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };
}

export function normalizeContactFormData(formData: FormData): ContactFormValues {
  return {
    fullName: String(formData.get("fullName") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim(),
    startedAt: String(formData.get("startedAt") ?? "").trim(),
  };
}

export function validateContactValues(values: ContactFormValues): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  if (values.fullName.length < 2 || !/[A-Za-z]/.test(values.fullName)) {
    fieldErrors.fullName = "Please enter your full name.";
  }

  if (!isValidEmail(values.email)) {
    fieldErrors.email = "Enter a valid email address so we can respond.";
  }

  if (values.phone.length > 0 && !isValidPhone(values.phone)) {
    fieldErrors.phone = "Enter a valid phone number or leave this field blank.";
  }

  if (!contactServiceOptions.some((option) => option.value === values.service)) {
    fieldErrors.service = "Please select the service you want to discuss.";
  }

  if (values.message.length < 20) {
    fieldErrors.message = "Please provide a bit more detail about your project or request.";
  }

  if (values.message.length > 3000) {
    fieldErrors.message = "Please shorten the message to 3000 characters or fewer.";
  }

  return fieldErrors;
}

export function getServiceLabel(service: string) {
  return contactServiceOptions.find((option) => option.value === service)?.label ?? "General Inquiry";
}

export function hasFieldErrors(fieldErrors: ContactFieldErrors) {
  return Object.keys(fieldErrors).length > 0;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[+()\-\s0-9]{7,20}$/.test(phone);
}

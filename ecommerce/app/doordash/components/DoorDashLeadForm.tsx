"use client";

import { useState, type FormEvent } from "react";

export interface DoorDashLeadFormField {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select";
  options?: string[];
  span?: "half" | "full";
}

interface DoorDashLeadFormProps {
  heading?: string;
  fields?: DoorDashLeadFormField[];
  submitLabel: string;
  consentText?: string;
  bare?: boolean;
  onSubmit?: (data: Record<string, string>) => void;
}

const defaultFields: DoorDashLeadFormField[] = [
  { name: "firstName", label: "First Name", span: "half" },
  { name: "lastName", label: "Last Name", span: "half" },
  { name: "storeName", label: "Restaurant Name" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "fullAddress", label: "Store Address" },
  { name: "businessPhone", label: "Store Phone", type: "tel", span: "half" },
  { name: "website", label: "Restaurant Website", span: "half" },
  {
    name: "primaryMerchantCategory",
    label: "Select your business type",
    type: "select",
    options: ["Restaurant", "Grocery", "Alcohol", "Convenience", "Flower Shop", "Pet Store", "Retail"],
  },
];

export function DoorDashLeadForm({
  heading,
  fields = defaultFields,
  submitLabel,
  consentText,
  bare = false,
  onSubmit,
}: DoorDashLeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit?.(values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={bare ? "" : "dd-card"}>
        <p className="dd-h5 mb-2">Thanks for reaching out!</p>
        <p className="dd-body text-[var(--dd-text-medium)]">A DoorDash growth expert will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={bare ? "" : "dd-card"}>
      {heading && <p className="dd-form-heading mb-4">{heading}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((field) =>
          field.type === "select" ? (
            <select
              key={field.name}
              required
              className={`dd-input ${field.span === "half" ? "" : "sm:col-span-2"}`}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              <option value="" disabled>
                {field.label}
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              key={field.name}
              required
              type={field.type ?? "text"}
              placeholder={field.label}
              className={`dd-input ${field.span === "half" ? "" : "sm:col-span-2"}`}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )
        )}
      </div>

      {consentText && <p className="dd-caption mt-3">{consentText}</p>}

      <div className="mt-3 flex justify-end">
        <button type="submit" className="dd-btn dd-btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

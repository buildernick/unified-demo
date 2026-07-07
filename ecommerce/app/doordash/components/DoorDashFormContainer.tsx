import type { ReactNode } from "react";

export interface DoorDashFormContainerProps {
  heading?: string;
  actionUrl?: string;
  method?: "POST" | "GET";
  consentText?: string;
  bare?: boolean;
  children?: ReactNode;
}

export function DoorDashFormContainer({
  heading,
  actionUrl,
  method = "POST",
  consentText,
  bare = false,
  children,
}: DoorDashFormContainerProps) {
  return (
    <form action={actionUrl} method={method} className={bare ? "" : "dd-card"}>
      {heading && <p className="dd-form-heading mb-4">{heading}</p>}

      <div className="flex flex-wrap gap-4">{children}</div>

      {consentText && <p className="dd-caption mt-3">{consentText}</p>}
    </form>
  );
}

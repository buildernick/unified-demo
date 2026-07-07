export interface DoorDashFormEmailFieldProps {
  name?: string;
  label?: string;
  required?: boolean;
}

export function DoorDashFormEmailField({
  name = "email",
  label = "Email Address",
  required = true,
}: DoorDashFormEmailFieldProps) {
  return <input type="email" name={name} required={required} placeholder={label} className="dd-input" />;
}

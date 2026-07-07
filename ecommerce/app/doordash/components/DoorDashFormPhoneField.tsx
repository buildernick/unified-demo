export interface DoorDashFormPhoneFieldProps {
  name?: string;
  label?: string;
  required?: boolean;
}

export function DoorDashFormPhoneField({
  name = "phone",
  label = "Phone Number",
  required = true,
}: DoorDashFormPhoneFieldProps) {
  return <input type="tel" name={name} required={required} placeholder={label} className="dd-input" />;
}

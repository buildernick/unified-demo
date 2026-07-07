export interface DoorDashFormTextFieldProps {
  name?: string;
  label?: string;
  required?: boolean;
}

export function DoorDashFormTextField({
  name = "field",
  label = "Label",
  required = true,
}: DoorDashFormTextFieldProps) {
  return <input type="text" name={name} required={required} placeholder={label} className="dd-input" />;
}

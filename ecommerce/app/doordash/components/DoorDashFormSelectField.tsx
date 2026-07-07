export interface DoorDashFormSelectFieldProps {
  name?: string;
  label?: string;
  options?: (string | { option: string })[];
  required?: boolean;
}

export function DoorDashFormSelectField({
  name = "field",
  label = "Select an option",
  options = ["Option 1", "Option 2"],
  required = true,
}: DoorDashFormSelectFieldProps) {
  const optionLabels = options.map((option) => (typeof option === "string" ? option : option.option));

  return (
    <select name={name} required={required} defaultValue="" className="dd-input">
      <option value="" disabled>
        {label}
      </option>
      {optionLabels.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

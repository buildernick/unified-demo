export interface DoorDashFormSubmitButtonProps {
  text?: string;
}

export function DoorDashFormSubmitButton({ text = "Submit" }: DoorDashFormSubmitButtonProps) {
  return (
    <div className="mt-3 flex w-full justify-end">
      <button type="submit" className="dd-btn dd-btn-primary">
        {text}
      </button>
    </div>
  );
}

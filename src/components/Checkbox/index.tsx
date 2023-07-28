import { useState } from "react";

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled: boolean;
}

// checked not working

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <input
      className="form-check-input"
      onClick={handleClick}
      type="checkbox"
      value=""
      checked={isChecked}
      disabled={disabled}
    />
  );
};

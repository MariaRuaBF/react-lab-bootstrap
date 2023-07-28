import { useEffect, useState } from "react";

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  disabled?: boolean;
  variant?: "checkbox" | "radio" | "switch";
  value?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  variant = "checkbox",
  value = "",
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isSwitch, setIsSwitch] = useState("");
  const [isVariant, setIsVariant] = useState("");

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const variantType = (variant: "checkbox" | "radio" | "switch") => {
    if (variant == "switch") {
      setIsSwitch("switch");
      setIsVariant("checkbox");
    } else {
      setIsSwitch("");
      return variant;
    }
  };

  useEffect(() => {
    variantType(variant);
    setIsVariant(variant);
  }, []);
  return (
    <input
      className="form-check-input"
      onClick={() => handleClick}
      type={isVariant}
      value={value}
      role={isSwitch}
      checked={isChecked}
      disabled={disabled}
    />
  );
};

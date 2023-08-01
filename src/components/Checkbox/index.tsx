import { useEffect, useId, useState } from "react";
import { Div, Input, InputProps, Label } from "@components";

export interface CheckboxProps extends Omit<InputProps, "type"> {
  checked?: boolean;
  disabled?: boolean;
  variant?: "switch";
  value?: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: checkedProp = false,
  value = "",
  className,
  onChange: onChangeProp,
  label,
  variant,
  id: idProp,
  ...rest
}) => {
  const [checked, setChecked] = useState(checkedProp);
  const id = idProp || useId();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChangeProp?.(event);
  };

  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);

  return (
    <Div className={`form-check ${variant ? "form-switch" : ""}`}>
      <Input
        {...rest}
        id={id}
        className={`form-check-input ${className}`}
        onChange={onChange}
        value={value}
        checked={checked}
        type="checkbox"
      />
      <Label htmlFor={id} className="form-check-label">
        {label}
      </Label>
    </Div>
  );
};

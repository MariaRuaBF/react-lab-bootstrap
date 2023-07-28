import { Color, Size, Variant } from "@interfaces";
import { useEffect, useState } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  color = "primary",
  size = "sm",
  ...rest
}) => {
  const [btnClass, setBtnClass] = useState("");
  const [sizeClass, setSizeClass] = useState("");

  useEffect(() => {
    if (variant && variant !== "fill") {
      setBtnClass(`btn-${variant}-${color}`);
    } else {
      setBtnClass(`btn-${color}`);
    }
  }, [color, variant]);

  useEffect(() => {
    if (size) {
      setSizeClass(`btn-${size}`);
    } else {
      setSizeClass("");
    }
  }, [size]);

  return <button className={`btn ${btnClass} ${sizeClass}`} {...rest} />;
};

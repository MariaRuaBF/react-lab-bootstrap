import { BaseElement } from "../../interfaces/HTMLAtributtes";
import {
  Color,
  VariantColorTogether,
} from "../../interfaces/VariantColorTogether";
import { objectToArrayString } from "../../utils/objectToArrayString";
import { objectToArrayToStringType } from "../../utils/objectToArrayToStringType";
import { variantColorTogetherObject } from "../../utils/variantColorTogetherObject";

interface ButtonProps
  extends Omit<BaseElement<HTMLDivElement>, "color">,
    VariantColorTogether {
  color?: Color;
  size?: "sm" | "lg";
  disabled?: boolean;
  toggle?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  disabled,
  toggle,
}) => {
  const classNamesTypes = objectToArrayToStringType(
    variantColorTogetherObject({ variant, color, size }),
    "btn"
  );
  //btn-outline-primary
  return <button className={`btn ${classNamesTypes} `}>Boton</button>;
};

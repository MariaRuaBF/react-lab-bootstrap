import { VariantColorTogether } from "../interfaces/Color";

export const variantColorTogetherObject = <D extends VariantColorTogether>(
  obj: D
): object => {
  const { variant, colorStyle, ...rest } = obj;
  if (variant && colorStyle) {
    const combinedValue = `${variant}-${colorStyle}`;
    return { variant: combinedValue, ...rest };
  }
  return obj;
};

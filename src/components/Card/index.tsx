import cn from "classnames";
import { useEffect, useState } from "react";

import { Div } from "../Div";
import { Card as CardType, Color, Size } from "@interfaces";
import { CardMedia } from "../CardMedia";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardType;
  colorCard?: Color;
  overlay?: boolean;
  src?: string;
  alt?: string;
  size?: Size;
  textCenter?: boolean;
}

export const Card: React.FC<CardProps> = ({
  overlay,
  className,
  variant,
  colorCard,
  textCenter,
  src,
  alt,
  size,
  ...rest
}) => {
  const [colorOutlined, setColorOutlined] = useState("");
  const [sizeCard, setSizeCard] = useState("");

  useEffect(() => {
    setColorOutlined(`${colorCard}`);
  }, [colorCard]);

  useEffect(() => {
    switch (size) {
      case "sm":
        setSizeCard("w-25");
        break;
      case "md":
        setSizeCard("w-50");
        break;
      case "lg":
        setSizeCard("w-100");
        break;
      default:
        break;
    }
  }, [size]);

  const outlinedColor = variant == "outlined" ? `border-${colorOutlined}` : "";
  const textCenterCard = textCenter ? "text-center" : "";

  return overlay ? (
    <Div
      className={cn(
        "card m-4",
        sizeCard,
        outlinedColor,
        textCenterCard,
        className
      )}
      {...rest}
    >
      <CardMedia src={src} alt={alt} />
      <Div className="card-img-overlay" {...rest} />
    </Div>
  ) : (
    <Div
      className={cn(
        "card m-4",
        outlinedColor,
        sizeCard,
        textCenterCard,
        className
      )}
      {...rest}
    ></Div>
  );
};

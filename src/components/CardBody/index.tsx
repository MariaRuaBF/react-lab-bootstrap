import { CardProps, Div } from "@components";
import { Color } from "@interfaces";
import { useEffect, useState } from "react";

interface CardBodyProps extends CardProps {
  title?: string;
  subtitle?: string;
  text?: string;
  anchor?: string;
  img?: string;
  textColor?: Color;
}

export const CardBody: React.FC<CardBodyProps> = ({
  title,
  subtitle,
  text,
  anchor,
  textColor,
  ...rest
}) => {
  const [colorText, setColorOutlined] = useState("");

  useEffect(() => {
    setColorOutlined(` text-${textColor}`);
  }, [textColor]);

  return (
    <Div className={`card-body${colorText}`} {...rest}>
      <h5>{title}</h5>
      <h6>{subtitle}</h6>
      <p>{text}</p>
      <a href="#">{anchor}</a>
    </Div>
  );
};

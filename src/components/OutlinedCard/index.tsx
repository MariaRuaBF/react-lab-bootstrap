import { Div } from "../Div";
import { useEffect, useState } from "react";
import { Color } from "@interfaces";
import { BasicCard } from "../BasicCard";

interface OutlinedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
  title?: string;
  subtitle?: string;
  text?: string;
  anchor?: string;
}

export const OutlinedCard: React.FC<OutlinedCardProps> = ({
  color,
  title,
  subtitle,
  text,
  anchor,
}) => {
  const [colorOutlined, setColorOutlined] = useState("");

  useEffect(() => {
    setColorOutlined(`${color}`);
  }, [color]);

  return (
    <Div className={`btn btn-outline-${colorOutlined}`}>
      <BasicCard
        title={title}
        subtitle={subtitle}
        text={text}
        anchor={anchor}
      />
    </Div>
  );
};

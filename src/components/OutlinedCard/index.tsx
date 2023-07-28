import { Div } from "../Div";
import { useEffect, useState } from "react";
import { Color } from "@interfaces";
import { BasicCard } from "../BasicCard";
import { CardProps } from "../Card";

interface OutlinedCardProps extends CardProps {}

export const OutlinedCard: React.FC<OutlinedCardProps> = ({
  colorCard,
  title,
  subtitle,
  text,
  anchor,
}) => {
  const [colorOutlined, setColorOutlined] = useState("");

  useEffect(() => {
    setColorOutlined(`${colorCard}`);
  }, [colorCard]);

  return (
    <Div className={`card border-${colorOutlined}`}>
      <BasicCard
        title={title}
        subtitle={subtitle}
        text={text}
        anchor={anchor}
      />
    </Div>
  );
};

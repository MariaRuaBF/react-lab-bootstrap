import { BasicCard, BasicCardProps } from "../BasicCard";
import { Div } from "../Div";
import { Card as CardType, Color } from "@interfaces";
import { OutlinedCard } from "../OutlinedCard";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BasicCardProps {
  variant?: CardType;
  color?: Color;
  title?: string;
  subtitle?: string;
  text?: string;
  anchor?: string;
}

export const Card: React.FC<CardProps> = ({
  variant,
  color,
  title,
  subtitle,
  text,
  anchor,
  ...rest
}) => {
  return (
    <Div className={`card m-4`} {...rest}>
      {variant == "basic" && (
        <BasicCard
          title={title}
          subtitle={subtitle}
          text={text}
          anchor={anchor}
        />
      )}
      {variant == "outlined" && (
        <OutlinedCard
          color={color}
          title={title}
          subtitle={subtitle}
          text={text}
          anchor={anchor}
        />
      )}
    </Div>
  );
};

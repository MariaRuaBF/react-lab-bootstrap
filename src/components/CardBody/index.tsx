import { Div } from "@components";
import { CardProps } from "@interfaces";

export const CardBody: React.FC<CardProps> = ({ ...rest }) => {
  return <Div className={`card-body`} {...rest} />;
};

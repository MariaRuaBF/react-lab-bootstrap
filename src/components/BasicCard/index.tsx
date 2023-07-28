import { CardProps } from "../Card";
import { Div } from "../Div";

export interface BasicCardProps extends CardProps {
  title?: string;
  subtitle?: string;
  text?: string;
  anchor?: string;
}

export const BasicCard: React.FC<BasicCardProps> = ({
  title = "Title",
  text = "Lorem ipsum",
  subtitle = "Subtitle",
  anchor = "Search",
  ...rest
}) => {
  return (
    <Div className={`card`} {...rest}>
      <Div className="card-body">
        <h6 className="card-title">{title}</h6>
        <h5 className="card-subtitle">{subtitle}</h5>
        <p className="card-subtitle">{text}</p>
        <a href="#" className="card-link">
          {anchor}
        </a>
      </Div>
    </Div>
  );
};

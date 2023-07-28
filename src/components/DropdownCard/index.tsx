import { useState } from "react";
import { CardProps } from "../Card";
import { Div } from "../Div";

interface DropdownCardProps extends CardProps {}

export const DropdownCard: React.FC<DropdownCardProps> = ({
  title,
  text,
  anchor,
  subtitle,
  img,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };
  return (
    <Div>
      <Div className="card-header">
        <h5 className="card-title">{title}</h5>
      </Div>
      <img className="card-img" src={img} alt="" />
      <Div className="card-body">
        <h6 className="card-subtitle">{subtitle}</h6>
        <p className="card-subtitle">{text}</p>
        <Div className="dropdown">
          <a
            href="#"
            data-toggle="dropdown"
            className="btn btn-secondary dropdown-toggle"
            onClick={handleExpandClick}
          >
            {anchor}
          </a>
        </Div>
      </Div>
    </Div>
  );
};

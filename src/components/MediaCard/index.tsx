import { CardProps } from "../Card";
import { Div } from "../Div";

interface MediaCardProps extends CardProps {}

export const MediaCard: React.FC<MediaCardProps> = ({
  title,
  text,
  anchor,
  img,
}) => {
  return (
    <Div>
      <img className="card-img" height={"300px"} src={img} alt="" />
      <Div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle">{text}</p>
        <Div className="dropdown">
          <a href="#">{anchor}</a>
        </Div>
      </Div>
    </Div>
  );
};

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
      <img
        className="card-img-top"
        src={img}
        alt="Card image cap"
        height={"300px"}
      />
      <Div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="card-link">
          {anchor}
        </a>
      </Div>
    </Div>
  );
};

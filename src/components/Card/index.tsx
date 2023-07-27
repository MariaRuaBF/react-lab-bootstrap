import { useEffect } from "react";
import { Div } from "../Div";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ ...rest }) => {
  useEffect(() => {}, []);
  return <Div className={`card m-4`} {...rest} />;
};

export const CardBody: React.FC<CardProps> = ({ ...rest }) => {
  useEffect(() => {}, []);
  return <Div className={`card-body`} {...rest} />;
};

export const CardHeader: React.FC<CardProps> = ({ ...rest }) => {
  useEffect(() => {}, []);
  return <Div className={`card-header`} {...rest} />;
};

export const CardTitle: React.FC<CardProps> = ({ ...rest }) => {
  useEffect(() => {}, []);
  return <h5 className={`card-title`} {...rest} />;
};

export const CardSubtitle: React.FC<CardProps> = ({ ...rest }) => {
  useEffect(() => {}, []);
  return <h6 className={`card-subtitle`} {...rest} />;
};

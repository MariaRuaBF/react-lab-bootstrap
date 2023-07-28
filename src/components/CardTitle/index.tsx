export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle: React.FC<TitleProps> = ({ ...rest }) => {
  return <h5 className={`card-title`} {...rest} />;
};

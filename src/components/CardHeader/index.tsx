export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardHeader: React.FC<HeaderProps> = ({ ...rest }) => {
  return <h5 className={`card-header`} {...rest} />;
};

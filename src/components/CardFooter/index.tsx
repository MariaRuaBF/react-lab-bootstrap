export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<FooterProps> = ({ ...rest }) => {
  return <div className={`card-footer`} {...rest} />;
};

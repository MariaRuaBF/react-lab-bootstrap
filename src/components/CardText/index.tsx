export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardText: React.FC<ParagraphProps> = ({ ...rest }) => {
  return <p className={`card-text`} {...rest} />;
};

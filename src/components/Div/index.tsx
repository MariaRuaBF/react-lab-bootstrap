interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Div: React.FC<DivProps> = ({ ...rest }) => {
  return <div {...rest} />;
};

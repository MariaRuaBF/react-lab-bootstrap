interface ImgProps extends React.HTMLAttributes<HTMLImageElement> {}

export const Img: React.FC<ImgProps> = ({ ...rest }) => {
  return <img {...rest} />;
};

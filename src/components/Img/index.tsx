interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Img: React.FC<ImgProps> = ({ ...rest }) => {
  return <img {...rest} />;
};

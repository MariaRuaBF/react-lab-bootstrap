export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const CardMedia: React.FC<ImgProps> = ({ src, alt, ...rest }) => {
  return <img className={`card-img`} src={src} alt={alt} {...rest} />;
};

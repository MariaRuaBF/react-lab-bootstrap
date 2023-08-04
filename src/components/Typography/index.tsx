import { Heading } from "@interfaces";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: Heading;
}

export const Typography: React.FC<TypographyProps> = (props) => {
  return <h1 {...props}></h1>;
};

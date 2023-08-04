import cn from "classnames";
import { useEffect, useState } from "react";

import { Div, DivProps } from "../Div";
import { Card as CardType, Color, Size } from "@interfaces";
import { CardMedia } from "../CardMedia";

export interface CardProps extends DivProps {
  variant?: CardType;
  colorCard?: Color;
  overlay?: { src: string; alt: string };
  size?: Size;
  textCenter?: boolean;
}

export const Card: React.FC<CardProps> = ({
  overlay,
  className,
  variant,
  colorCard,
  textCenter,
  size,
  children,
  ...rest
}) => {
  const [colorOutlined, setColorOutlined] = useState("");
  const [sizeCard, setSizeCard] = useState("");

  useEffect(() => {
    setColorOutlined(`${colorCard}`);
  }, [colorCard]);

  useEffect(() => {
    switch (size) {
      case "sm":
        setSizeCard("w-25");
        break;
      case "md":
        setSizeCard("w-50");
        break;
      case "lg":
        setSizeCard("w-100");
        break;
      default:
        break;
    }
  }, [size]);

  const outlinedColor = variant == "outlined" ? `border-${colorOutlined}` : "";
  const textCenterCard = textCenter ? "text-center" : "";

  // const overlapping = (array) => {
  //   let flag;
  //   let ar=[]
  //   for(let i=0; i<array.length; i++){
  //       if(array[i+1]!==undefined && array[i][1] >= array[i+1][0] ){
  //           ar.push([array[i][0],array[i+1][1]])
  //           flag=true;
  //           i++
  //       } else {
  //           ar.push(array[i])
  //       }
  //   }
  //   if(flag){
  //       flag=false
  //       return overlapping(ar)
  //   }
  //   return ar

  //   const keys = (string) => {
  //     const array = [];
  //     const stack = {
  //       "(": ")",
  //       "[": "]",
  //       "{": "}",
  //     };
  //     for (const char of string) {
  //       if (stack[char]) {
  //         array.push(char); ()
  //       } else if (Object.values(stack).includes(char)) { //[')', '}', ']']
  //         let lastValue = array.pop()
  //         if(stack[lastValue] !== char){
  //             return false;
  //         }
  //       }
  //     }
  //     return array.length==0
  // };

  //{[[[[{{{(({()}))}}}]]]]}
  return (
    <Div
      className={cn(
        "card m-4",
        outlinedColor,
        sizeCard,
        textCenterCard,
        className
      )}
      {...rest}
    >
      {overlay ? (
        <>
          <CardMedia src={overlay.src} alt={overlay.alt} />
          <Div className="card-img-overlay">{children}</Div>
        </>
      ) : (
        children
      )}
    </Div>
  );
};

import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path d="M17 22H21C21.5523 22 22 21.5523 22 21V9.5207C22 9.19439 21.8408 8.8886 21.5735 8.70147L12.5735 2.40147C12.2291 2.16045 11.7709 2.16045 11.4265 2.40147L2.42654 8.70147C2.15921 8.8886 2 9.19439 2 9.5207V21C2 21.5523 2.44772 22 3 22H7V15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15V22ZM15 22V15C15 13.3432 13.6569 12 12 12C10.3431 12 9 13.3432 9 15V22H15Z" fill="#FCFCFC" />
    </Svg>
  );
};

export default Icon;

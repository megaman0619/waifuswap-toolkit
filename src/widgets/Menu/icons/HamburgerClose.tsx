import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path d="M7.78 2.5799L6.6 1.3999L0 7.9999L6.6 14.5999L7.78 13.4199L2.36 7.9999L7.78 2.5799Z" fill="#FCFCFC"/>
    </Svg>
  );
};

export default Icon;




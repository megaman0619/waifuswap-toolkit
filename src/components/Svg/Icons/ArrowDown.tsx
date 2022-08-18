import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-1 -1 34 34" {...props}>
      <path d="M23.5 16L22.09 14.59L16.5 20.17V8H14.5V20.17L8.92 14.58L7.5 16L15.5 24L23.5 16Z" fill="#A0B9FB" />
      <path d="M16 31C7.71573 31 1 24.2843 1 16H-1C-1 25.3888 6.61116 33 16 33V31ZM31 16C31 24.2843 24.2843 31 16 31V33C25.3888 33 33 25.3888 33 16H31ZM16 1C24.2843 1 31 7.71573 31 16H33C33 6.61116 25.3888 -1 16 -1V1ZM16 -1C6.61116 -1 -1 6.61116 -1 16H1C1 7.71573 7.71573 1 16 1V-1Z" fill="#A0B9FB" />
    </Svg>
  );
};

export default Icon;

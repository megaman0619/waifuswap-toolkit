import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" {...props}>
      <circle cx="20" cy="20" r="20" fill="#A0B9FB" />
      <path d="M24 9H12C10.9 9 10 9.9 10 11V25H12V11H24V9ZM23 13H16C14.9 13 14.01 13.9 14.01 15L14 29C14 30.1 14.89 31 15.99 31H27C28.1 31 29 30.1 29 29V19L23 13ZM16 29V15H22V20H27V29H16Z" fill="#FCFCFC" />
    </Svg>
  );
};

export default Icon;

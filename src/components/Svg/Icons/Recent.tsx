import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" {...props}>
      <path d="M14.74 5.76C13.57 4.59 12.04 4 10.5 4V10L6.26 14.24C8.6 16.58 12.4 16.58 14.75 14.24C17.09 11.9 17.09 8.1 14.74 5.76ZM10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM10.5 18C6.08 18 2.5 14.42 2.5 10C2.5 5.58 6.08 2 10.5 2C14.92 2 18.5 5.58 18.5 10C18.5 14.42 14.92 18 10.5 18Z" fill="#A0B9FB" />
    </Svg>
  );
};

export default Icon;

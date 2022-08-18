import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" {...props}>
      <path d="M21.3337 1.33325H5.33366C3.86699 1.33325 2.66699 2.53325 2.66699 3.99992V22.6666H5.33366V3.99992H21.3337V1.33325ZM20.0003 6.66658H10.667C9.20033 6.66658 8.01366 7.86658 8.01366 9.33325L8.00033 27.9999C8.00033 29.4666 9.18699 30.6666 10.6537 30.6666H25.3337C26.8003 30.6666 28.0003 29.4666 28.0003 27.9999V14.6666L20.0003 6.66658ZM10.667 27.9999V9.33325H18.667V15.9999H25.3337V27.9999H10.667Z" fill="#A0B9FB" />
    </Svg>
  );
};

export default Icon;
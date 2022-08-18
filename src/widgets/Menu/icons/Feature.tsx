import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27 27" {...props}>
      <path d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z" fill="#FCFCFC" />
    </Svg>
  );
};

export default Icon;

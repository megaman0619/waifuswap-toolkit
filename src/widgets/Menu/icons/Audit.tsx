import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path d="M11 0.166504L0.5 4.83317V11.8332C0.5 18.3082 4.98 24.3632 11 25.8332C17.02 24.3632 21.5 18.3082 21.5 11.8332V4.83317L11 0.166504ZM11 12.9882H19.1667C18.5483 17.7948 15.34 22.0765 11 23.4182V12.9998H2.83333V6.34984L11 2.7215V12.9882Z" fill="#FCFCFC" />
    </Svg>
  );
};

export default Icon;

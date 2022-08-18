import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21ZM5 5H19L19.001 19H5V5Z" fill="#5F47EE" />
      <path d="M13.5535 11.6577L9.55347 9.65773L7.10547 14.5527L8.89547 15.4467L10.4475 12.3417L14.4475 14.3417L16.8955 9.44673L15.1055 8.55273L13.5535 11.6577Z" fill="#5F47EE" />
    </Svg>
  );
};

export default Icon;

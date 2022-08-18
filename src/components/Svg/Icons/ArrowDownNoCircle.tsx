import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" {...props}>
      <path d="M11.3337 6.00008L10.3937 5.06008L6.66699 8.78008V0.666748H5.33366V8.78008L1.61366 5.05341L0.666992 6.00008L6.00033 11.3334L11.3337 6.00008Z" fill="#A0B9FB" />
    </Svg>
  );
};

export default Icon;

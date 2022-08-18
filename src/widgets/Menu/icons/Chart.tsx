import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="14" viewBox="0 0 24 14" style={{ marginTop: 'auto', marginBottom: 'auto' }} {...props}>
      <path d="M16.6663 0L19.338 2.67167L13.6447 8.365L8.97801 3.69833L0.333008 12.355L1.97801 14L8.97801 7L13.6447 11.6667L20.9947 4.32833L23.6663 7V0H16.6663Z" fill="#FCFCFC" />
    </Svg>
  );
};

export default Icon;

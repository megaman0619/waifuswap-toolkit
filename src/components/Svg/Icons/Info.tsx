import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 15 14" {...props}>
      <path d="M6.83301 3.66666H8.16634V5H6.83301V3.66666ZM6.83301 6.33333H8.16634V10.3333H6.83301V6.33333ZM7.49967 0.333328C3.81967 0.333328 0.833008 3.31999 0.833008 7C0.833008 10.68 3.81967 13.6667 7.49967 13.6667C11.1797 13.6667 14.1663 10.68 14.1663 7C14.1663 3.31999 11.1797 0.333328 7.49967 0.333328ZM7.49967 12.3333C4.55967 12.3333 2.16634 9.93999 2.16634 7C2.16634 4.06 4.55967 1.66666 7.49967 1.66666C10.4397 1.66666 12.833 4.06 12.833 7C12.833 9.93999 10.4397 12.3333 7.49967 12.3333Z" fill="#A0B9FB" />
    </Svg>
  );
};

export default Icon;
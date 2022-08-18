import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" {...props}>
      <path d="M6.882 5.968C8.47575 4.69107 10.4578 3.99674 12.5 4C14.625 4 16.578 4.736 18.118 5.968L19.571 4.515L20.985 5.929L19.532 7.382C20.5897 8.70615 21.2521 10.302 21.4428 11.986C21.6336 13.6699 21.345 15.3735 20.6103 16.9007C19.8756 18.4279 18.7246 19.7167 17.2898 20.6186C15.855 21.5205 14.1947 21.999 12.5 21.999C10.8053 21.999 9.14498 21.5205 7.7102 20.6186C6.27541 19.7167 5.12443 18.4279 4.38973 16.9007C3.65502 15.3735 3.36644 13.6699 3.5572 11.986C3.74796 10.302 4.4103 8.70615 5.46801 7.382L4.01501 5.93L5.42901 4.516L6.882 5.969V5.968ZM13.5 12V7.495L8.50001 14H11.5V18.5L16.5 12H13.5ZM8.50001 1H16.5V3H8.50001V1Z" fill="url(#paint0_linear_3351_12023)" />
      <defs>
        <linearGradient id="paint0_linear_3351_12023" x1="3.5" y1="11.4995" x2="21.5" y2="11.4995" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5F47EE" />
          <stop offset="1" stopColor="#89FFE3" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;

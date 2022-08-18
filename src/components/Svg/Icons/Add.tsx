import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="72" height="40" viewBox="-5 1.2 83 38" {...props}>
      <path d="M43 21H37V27H35V21H29V19H35V13H37V19H43V21Z" fill="#A0B9FB" />
      <path d="M20 1H52V-1H20V1ZM52 39H20V41H52V39ZM20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM71 20C71 30.4934 62.4934 39 52 39V41C63.598 41 73 31.598 73 20H71ZM52 1C62.4934 1 71 9.50659 71 20H73C73 8.40202 63.598 -1 52 -1V1ZM20 -1C8.40202 -1 -1 8.40202 -1 20H1C1 9.50659 9.50659 1 20 1V-1Z" fill="#A0B9FB" />
    </Svg>
  );
};

export default Icon;

import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorkey: "primary" | "secondary";
} & ButtonMenuItemProps;

const InactiveButton = styled(Button) <InactiveButtonProps>`
  background-color: #1E215C;
  border-radius: 4px;
  // color: ${({ theme, colorkey }) => theme.colors[colorkey]};
  color: #7381FC;

  &:hover:not(:disabled):not(:active) {
    background-color: #1E215C;
  }
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="tertiary"
        colorkey={variant === variants.PRIMARY ? "primary" : "secondary"}
        {...props}
      />
    );
  }

  return <Button as={as} size={size} variant={variant} {...props} style={{ background: '#5F47EE', boxShadow: 'none', borderRadius: 4 }} />;
};

export default ButtonMenuItem;

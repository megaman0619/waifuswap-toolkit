import React from "react";
import styled from "styled-components";

type Position = "top" | "top-right" | "bottom";

interface PositionProps {
  position?: Position;
}

interface DropdownProps extends PositionProps {
  disabled: boolean;
  target: React.ReactElement;
}

const getLeft = ({ position }: PositionProps) => {
  if (position === "top-right") {
    return "100%";
  }
  return "50%";
};

const getBottom = ({ position }: PositionProps) => {
  if (position === "top" || position === "top-right") {
    return "100%";
  }
  return "auto";
};

const DropdownContent = styled.div<{ position: Position }>`
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  left: ${getLeft};
  bottom: ${getBottom};
  padding: 4px 0px 0px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 10;
  border-radius: 20;
`;

const Container = styled.div<{ disabled: boolean }>`
  position: relative;
  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    display: flex;
  }
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
`;

const Dropdown: React.FC<DropdownProps> = ({ disabled, target, position = "bottom", children }) => {
  return (
    <Container disabled={disabled}>
      {target}
      <DropdownContent position={position}>{children}</DropdownContent>
    </Container>
  );
};

Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;
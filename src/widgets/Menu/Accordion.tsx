import React from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  isMobile: boolean;
  isPushed: boolean;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  isOpen?: boolean,
  onClick: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  background-color: #151745;
  margin: 0px -22px;
  padding: 0px 22px;
`;

const Accordion: React.FC<Props> = ({
  label,
  isMobile,
  isPushed,
  icon,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isOpen = false,
  onClick,
}) => {

  const handleClick = () => {
    if (isPushed) {
      onClick()
    } else {
      pushNav(true);
    }
  };

  return (
    <Container>
      <MenuEntry isMobile={isMobile} isPushed={isPushed} onClick={handleClick} className={className} style={{ height: 44 }}>
        {icon}
        {isPushed && <>
          <LinkLabel isMobile={isMobile} isPushed={isPushed}>{label}</LinkLabel>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </>}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;

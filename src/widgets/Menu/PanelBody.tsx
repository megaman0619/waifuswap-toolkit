import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: ${({ isMobile }) => isMobile ? '8px' : '32px'};
`;

const Divider = styled.hr`
  width: 100%;
  background-color: #3924B5;
  opacity: 0.2;
  margin-left: 0;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();
  const [current, setCurrent] = useState(-1);

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  const handleOpen = (ind = 0) => {
    setCurrent(current === ind ? -1 : ind)
  };

  return (
    <Container isMobile={isMobile} style={{ marginTop: 40, paddingTop: 0 }}>
      {links.map((entry, index) => {
        if (isMobile) {
          if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) {
            return false;
          }
        }
        if (entry.label === 'Divider') {
          return <Divider key={index} />
        }
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {

          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isMobile={isMobile}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              onClick={() => handleOpen(index)}
              isOpen={current === index}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.label} isMobile={isMobile} isPushed={isPushed} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink target="_blank" href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }

        const exchangeUrl = ['/swap', '/pool', '/find', '/add', '/remove']
        exchangeUrl.filter(x => { location.pathname.startsWith(x) })

        return (
          <MenuEntry key={entry.label} isMobile={isMobile} isPushed={isPushed} isActive={
            (entry.label === 'Exchange' && entry.href === '/swap' && exchangeUrl.filter(x => { location.pathname.startsWith(x) })[0] !== '') ||
            (entry.label !== 'Exchange' && entry.href === location.pathname)}
            className={calloutClass} style={{ height: 44, marginBottom: 5 }}>
            <MenuLink href={entry.href} onClick={handleClick} style={{ width: isPushed ? '100%' : 'unset' }}>
              {iconElement}
              {isPushed && <LinkLabel isMobile={isMobile} isPushed={isPushed}>{entry.label}</LinkLabel>}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container >
  );
};

export default PanelBody;

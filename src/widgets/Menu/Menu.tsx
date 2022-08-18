import React, { useState, useEffect, useRef } from "react";
import { useMedia } from 'react-use'
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import * as IconModule from "./icons";
import { MobileMenuIcon } from "./icons";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import Panel from "./Panel";
import Logo from "./Logo";
import { SvgProps } from "../../components/Svg";
import ChainSelect from "../../components/ChainSelect/ChainSelect";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import Dropdown from '../../components/Dropbox';
import MenuButton from "./MenuButton";
import MenuLink from "./MenuLink";
import { MenuEntry } from "./MenuEntry";
import { PaladinIcon } from "../../components/Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ isPushed: boolean; showMenu: boolean; isMobile: boolean; }>`
  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'absolute')};
  top: ${({ showMenu, isMobile }) => ((showMenu || isMobile) ? 0 : 0)};
  left: ${({ isPushed, showMenu, isMobile }) => `${isPushed ? SIDEBAR_WIDTH_FULL : isMobile ? 0 : SIDEBAR_WIDTH_REDUCED}px`};

  transition: top 0.2s;
  display: ${({ isPushed, isMobile }) => ((isPushed && isMobile) ? 'none' : 'flex')};
  justify-content: ${({ isMobile }) => (isMobile ? 'space-between' : 'flex-end')};
  align-items: center;
  padding-left: ${({ isMobile }) => (isMobile ? '24px' : '8px')};
  padding-right: ${({ isMobile }) => (isMobile ? '20px' : '48px')};
  // padding-right: 0px;
  width: calc(100% - ${({ isPushed, isMobile }) => `${isPushed ? SIDEBAR_WIDTH_FULL : isMobile ? 0 : SIDEBAR_WIDTH_REDUCED}px`});
  height: ${({ isMobile }) => (isMobile ? '80px' : `${MENU_HEIGHT}px`)};
  background: ${({ isMobile }) => (isMobile ? '#151745' : 'transparent')};
  z-index: ${({ isMobile }) => (isMobile ? '1' : '20')};
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean; }>`
  flex-grow: 1;
  margin-top: ${({ isMobile }) => (isMobile ? '96px' : '0px')};
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const MobileFooter = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  background: #142348;
  height: 64px;
  width: 100%;
  left: 0;
`;

const Menu: React.FC<NavProps> = ({
  account,
  chainId,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  rbsPriceUsd,
  rbsPriceLink,
  rbtPriceUsd,
  rbtPriceLink,
  links,
  profile,
  children,
}) => {

  const isMobile = useMedia('(max-width: 970px)')
  const location = useLocation();
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const homeLink = links.find((link) => link.label === "Home");

  // Find the home link if provided
  return (
    <Wrapper>
      <StyledNav isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
        <Flex style={{ alignItems: 'center', gap: '10px' }}>
          {!isMobile &&
            // <StyledLink target="_blank" as="a" href={href} aria-label="Robust home page">
            <PaladinIcon />
            // </StyledLink>
          }
          <ChainSelect disabled={!chainId} chainId={chainId} />
          <UserBlock account={account} login={login} logout={logout} isMobile={isMobile} isPushed={isPushed} />
          {isMobile &&
            <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed(true)}>
              <MobileMenuIcon width="32px" color="text" />
            </MenuButton>}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          rbsPriceUsd={rbsPriceUsd}
          rbsPriceLink={rbsPriceLink}
          rbtPriceUsd={rbtPriceUsd}
          rbtPriceLink={rbtPriceLink}
          pushNav={setIsPushed}
          links={links}
          account={account}
          login={login}
          logout={logout}
        />
        <Inner isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      {isMobile &&
        <MobileFooter>
          {links.map((entry, index) => {
            if (index < 5 && entry.label !== 'Divider') {
              const Icon = Icons[entry.icon];
              const iconElement = <Icon width="24px" />;
              const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
              return (
                <MenuEntry key={entry.label} isMobile={isMobile} isPushed={isPushed} className={calloutClass} isActive={
                  entry.href === location.pathname}>
                  <MenuLink href={entry.href} onClick={() => setIsPushed(false)} style={{ width: isPushed ? '100%' : 'unset' }}>
                    {iconElement}
                  </MenuLink>
                </MenuEntry>
              );
            }
          })}
        </MobileFooter>}
    </Wrapper>
  );
};

export default Menu;

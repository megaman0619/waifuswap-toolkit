import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoWithTitleIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import { LogoIcon1 as LogoWithNoText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isMobile: boolean;
  isPushed: boolean;
  isHover: boolean;
  isMenu?: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  align-items: center;
  .mobile-icon {
    width: 102px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 56px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Wrapper = styled.div<{ isPushed: boolean; isMobile: boolean; }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Logo: React.FC<Props> = ({ isMobile, isPushed, isHover, isMenu, togglePush, isDark, href }) => {

  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {isMobile && <LogoWithTitleIcon className="mobile-icon" />}
      <LogoWithText className="desktop-icon" isDark={isDark} style={{ width: 181, marginTop: 24 }} />
    </>
  );

  const innerLogo1 = (
    <>
      {isMobile && <LogoWithTitleIcon className="mobile-icon" />}
      <LogoWithNoText className="desktop-icon" isDark={isDark} style={{ marginTop: 24 }} />
    </>
  );

  return (
    <Wrapper isPushed={isPushed} isMobile={isMobile}>
      <Flex>
        {!isMobile && isHover && <MenuButton style={{ position: 'absolute', left: '230px', width: "32px", height: "32px", background: '#3924B5', borderRadius: '50%', paddingLeft: 12, marginTop: 24 }} aria-label="Toggle menu" onClick={togglePush} mr="14px">
          {isPushed && (
            <HamburgerCloseIcon width="16px" color="text" />
          )}
        </MenuButton>}
        {isAbsoluteUrl ? (
          <StyledLink as="a" href={href} aria-label="Robust home page">
            {isPushed ? innerLogo : innerLogo1}
          </StyledLink>
        ) : (
          <StyledLink to={href} aria-label="Robust home page">
            {isPushed ? innerLogo : innerLogo1}
          </StyledLink>
        )}
      </Flex>
    </Wrapper>
  );
};

export default Logo;

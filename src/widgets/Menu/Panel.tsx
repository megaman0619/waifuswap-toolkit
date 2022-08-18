import React, { useState } from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { NavProps, PanelProps, PushedProps } from "./types";
import Logo from "./Logo";
import { MobileCloseIcon } from "./icons";
import MenuButton from "./MenuButton";
import Button from "../../components/Button/Button";
import { MobileLoginButtonIcon } from "./icons";
import { useWalletModal } from "../WalletModal";
import { LogoWithTitleIcon } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Skeleton from "../../components/Skeleton/Skeleton";

interface Props extends PanelProps, PushedProps, NavProps {
  className?: string;
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean; }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background: linear-gradient(180deg, #0C0720 0%, #291A83 100%);
  width: ${({ isPushed, isMobile }) => (isPushed ? isMobile ? '100%' : `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  box-shadow: 5px 4px 14px 8px rgba(14, 14, 14, 0.1);
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  top: 0;
  padding: 0px 24px;
  height: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px
`;

const PriceLink = styled.a`
  display: block;
  text-align: center;
  align-items: center;
  padding: 17px 32px;
  border: none;
  width: 50%;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
  background: #5F47EE;
`;

const SkeletonWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Divider = styled.div`
  height: 38px;
  width: 0px;
  border-right: 1px solid white;
  margin-top: auto;
  margin-bottom: auto;
`

const Panel: React.FC<Props> = (props) => {
  const { isMobile, isPushed, showMenu, isDark, links, pushNav, login, logout, account, rbsPriceUsd, rbsPriceLink, rbtPriceUsd, rbtPriceLink } = props;
  const [isHover, setIsHover] = useState(false);
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, '250px', logout, account);
  const accountEllipsis = account ? isMobile ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <StyledPanel className="LeftSideBar" isPushed={isPushed} showMenu={showMenu} isMobile={isMobile} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {isMobile ?
        <FlexWrapper>
          <Logo
            isMobile={isMobile}
            isHover={isHover}
            isPushed={isPushed}
            togglePush={() => pushNav(false)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          <Wrapper>
            {account ?
              <Button
                size="sm"
                onClick={() => {
                  onPresentAccountModal();
                }}
                style={{ marginRight: 8, background: "#5F47EE" }}
              >
                {accountEllipsis}
              </Button> :
              <Button onClick={() => onPresentConnectModal()} style={{ height: 32, marginRight: 16 }}>
                <MobileLoginButtonIcon width="25px" />
              </Button>
            }
            <MenuButton onClick={() => pushNav(false)}>
              <MobileCloseIcon width="32px" />
            </MenuButton>
          </Wrapper>
        </FlexWrapper> :
        <Logo
          isMobile={isMobile}
          isPushed={isPushed}
          togglePush={() => pushNav(false)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
          isHover={isHover}
        />
      }
      {isMobile &&
        <>
          {rbsPriceUsd && rbtPriceUsd ? (
            <div style={{ display: 'flex', width: '100%', backgroundColor: '#5F47EE' }}>
              <PriceLink href={rbsPriceLink} target="_blank" style={{ textAlign: 'right' }}>
                <Text color="white" fontSize="12px" style={{ marginRight: 19 }}>RBS</Text>
                <Text color="white" fontSize="16px">{`$${rbsPriceUsd.toFixed(2)}`}</Text>
              </PriceLink>
              <Divider />
              <div style={{ height: 38, width: 0, borderRight: '1px solid white', marginTop: 'auto', marginBottom: 'auto' }} />
              <PriceLink href={rbtPriceLink} target="_blank" style={{ textAlign: 'left' }}>
                <Text color="white" fontSize="12px">RBT </Text>
                <Text color="white" fontSize="16px">{`$${rbtPriceUsd.toFixed(2)}`}</Text>
              </PriceLink>
            </div>
          ) : (
            <SkeletonWrapper>
              <Skeleton width={142} height={38} />
            </SkeletonWrapper>
          )}
        </>
      }
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;

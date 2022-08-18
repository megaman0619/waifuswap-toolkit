import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  isMobile: boolean;
  isPushed: boolean;
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<Props>`
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 12px;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding-left: ${({ secondary, isPushed }) => (secondary ? "29px" : isPushed ? "13px" : 0)};
  padding-right: ${({ isPushed }) => (isPushed ? "12px" : 0)};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background: ${({ isActive }) => (isActive ? "linear-gradient(90.04deg, rgba(12, 7, 32, 0.8) 0.04%, rgba(41, 26, 131, 0.8) 99.97%)" : "none")};
  color: ${({ theme }) => theme.colors.textSubtle};
  width: ${({ isPushed }) => (isPushed ? "100%" : "48px")};
  border-radius: ${({ isPushed }) => (isPushed ? "8px" : "50%")};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background: linear-gradient(90.04deg, rgba(12, 7, 32, 0.8) 0.04%, rgba(41, 26, 131, 0.8) 99.97%);
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rainbowAnimation} 5s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;

    a > div {
      color: ${({ theme }) => theme.colors.textSubtle};
    }
  }
`;
MenuEntry.defaultProps = {
  isMobile: true,
  isPushed: true,
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };

import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";
import { background } from "styled-system";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  background?: string;
  headerPadding?: string;
  minWidth?: string;
  margin?: string;
}

const StyledModal = styled.div<{ minWidth: string, margin: string, background: string | undefined }>`
  background: ${({ theme, background }) => background || theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 16px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  margin: ${({ margin }) => margin};
  min-width: ${({ minWidth }) => minWidth};
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    max-width: 90%;
  }
`;

const ModalHeader = styled.div<{ headerPadding: string }>`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 12px 24px;
  padding-top: ${({ headerPadding }) => headerPadding};
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerPadding = "0px",
  background,
  minWidth = "360px",
  margin = "0px 0px 0px 0px"
}) => (
  <StyledModal minWidth={minWidth} margin={margin} background={background}>
    <ModalHeader headerPadding={headerPadding}>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon />
        </IconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column" p={bodyPadding} style={{ paddingTop: 0, paddingBottom: 32 }}>
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;

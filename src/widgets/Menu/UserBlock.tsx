import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";
// import 'semantic-ui-css/semantic.min.css';
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { MobileLoginButtonIcon } from "./icons";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PaladinIcon } from "../..";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  isMobile?: boolean;
  isPushed?: boolean;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, isMobile, isPushed }) => {

  const marginLeft = isPushed ? SIDEBAR_WIDTH_FULL : isMobile ? 0 : SIDEBAR_WIDTH_REDUCED
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, `${marginLeft}px`, logout, account);
  const accountEllipsis = account ? isMobile ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  // const href = "https://docs.robustswap.com/security/audits"
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {account ? (
        <Button
          size="sm"
          onClick={() => {
            onPresentAccountModal();
          }}
          style={{ marginRight: 0, background: "#6C60F6" }}
        >
          {accountEllipsis}
        </Button>
      ) : isMobile ?
        (
          <Button onClick={() => onPresentConnectModal()} style={{ height: 32, marginRight: 16 }}>
            <MobileLoginButtonIcon width="25px" />
          </Button>
        ) :
        (
          <Button
            size="sm"
            variant="primary"
            onClick={() => {
              onPresentConnectModal();
            }}
            style={{
              fontFamily: 'Poppins', fontSize: 16, fontWeight: 600, lineHeight: '24px', padding: '4px 24px 4px 24px'
            }}
          >
            Connect
          </Button>
        )}
    </div>
  );
};

export default UserBlock;

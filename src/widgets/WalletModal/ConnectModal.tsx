import React from "react";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  marginLeft?: string;
  onDismiss?: () => void;
}

const ConnectModal: React.FC<Props> = ({ login, marginLeft, onDismiss = () => null }) => (
  <Modal title="Connect wallet" onDismiss={onDismiss} bodyPadding="0px" minWidth="312px" margin={`0px 0px 0px ${marginLeft}`}>
    <div style={{ width: 310 }}>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          onDismiss={onDismiss}
          mb={index < config.length - 2 ? "60px" : "0"}
        />
      ))}
    </div>
  </Modal>
);

export default ConnectModal;

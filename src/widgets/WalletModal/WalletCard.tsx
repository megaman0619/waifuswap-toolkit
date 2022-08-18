import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      variant="text"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      style={{ padding: 0, width: '48%' }}
    >
      <div style={{ display: 'block' }}>
        <Icon width="64px" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <Text bold color="#fff" fontSize="12px" mr="16px" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {title}
        </Text>
      </div>
    </Button>
  );
};

export default WalletCard;

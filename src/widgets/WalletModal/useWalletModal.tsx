import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, marginLeft: string, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal marginLeft={marginLeft} login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal marginLeft={marginLeft} account={account || ""} logout={logout} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;

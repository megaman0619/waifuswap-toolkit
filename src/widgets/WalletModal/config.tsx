import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import Coin98 from "./icons/Coin98";
import SafePal from "./icons/SafePal";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Binance Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coin98",
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";

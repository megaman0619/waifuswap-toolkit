import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { CopyIcon } from "../..";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  marginLeft?: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, marginLeft, logout, onDismiss = () => null }) => {
  const accountEllipsis = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`

  return (
    <Modal title="Your wallet" onDismiss={onDismiss} margin={`0px 0px 0px ${marginLeft}`}>
      <Flex mb="18px" mt="8px">
        <Text
          fontSize="20px"
          bold
          style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px", width: "173px", color: "#E354FA" }}
        >
          {accountEllipsis}
        </Text>
        <CopyIcon />
      </Flex>
      <Flex>
        <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px" style={{ fontSize: 16, color: '#FCFCFC' }}>
          View on BscScan
        </LinkExternal>
      </Flex>
      <Flex justifyContent="center">
        <Button
          size="md"
          variant="secondary"
          onClick={() => {
            logout();
            window.localStorage.removeItem(localStorageKey);
            onDismiss();
            window.location.reload();
          }}
          style={{ fontSize: 18, fontWeight: 600, lineHeight: '24px', width: 318, marginTop: 32 }}
        >
          LOG OUT
        </Button>
      </Flex>
    </Modal>
  )
}

export default AccountModal;

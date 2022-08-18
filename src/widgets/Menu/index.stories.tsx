import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import Menu from "./Menu";
import { LangType } from "./types";
import { links } from "./config";

export default {
  title: "Widgets/Menu",
  component: Menu,
  argTypes: {},
};

const langs: LangType[] = [...Array(5)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

export const Connected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        rbsPriceUsd={10.00}
        rbsPriceLink="https://bscscan.com/token/0x95336aC5f7E840e7716781313e1607F7C9D6BE25"
        rbtPriceUsd={45.03}
        rbtPriceLink="https://bscscan.com/token/0x891e4554227385c5c740f9b483e935e3cbc29f01"
        links={links}
        profile={null}
      >
        <div>
          {/* <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text> */}
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const NotConnected: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account={null}
        login={noop}
        logout={noop}
        isDark
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        links={links}
      >
        <div>
          <h1>Page body</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithNoProfile: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        rbsPriceUsd={10.00}
        rbsPriceLink="https://bscscan.com/token/0x95336aC5f7E840e7716781313e1607F7C9D6BE25"
        rbtPriceUsd={45.03}
        rbtPriceLink="https://bscscan.com/token/0x891e4554227385c5c740f9b483e935e3cbc29f01"
        links={links}
        profile={{
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  );
};

export const WithProfile: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        rbsPriceUsd={10.00}
        rbsPriceLink="https://bscscan.com/token/0x95336aC5f7E840e7716781313e1607F7C9D6BE25"
        rbtPriceUsd={45.03}
        rbtPriceLink="https://bscscan.com/token/0x891e4554227385c5c740f9b483e935e3cbc29f01"
        links={links}
        profile={{
          username: "robustswap",
          image: "",
          profileLink: "/profile",
          noProfileLink: "/no-profile",
        }}
      >
        <div>
          <Heading as="h1" mb="8px">
            Page body
          </Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
          </Text>
        </div>
      </Menu>
    </BrowserRouter>
  );
};

// export const MenuEntryComponent: React.FC = () => {
//   return (
//     <Flex justifyContent="space-between" p="16px" style={{ backgroundColor: "wheat" }}>
//       <MenuEntry>Default</MenuEntry>
//       <MenuEntry secondary>
//         Secondary
//       </MenuEntry>
//       <MenuEntry isActive>
//         isActive
//       </MenuEntry>
//     </Flex>
//   );
// };
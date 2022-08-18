import React, { useState, SVGAttributes, useEffect } from "react";
import { SpaceProps } from "styled-system";
import styled, { DefaultTheme } from "styled-components";
import Dropdown from '../Dropbox';
import { HelpIcon } from "../Svg";
import requestChainChange from "../../util/requestChainChange";

const MyButton = styled.div`
  background-color:${({ theme }) => theme.nav.background}
`;
const MyDropdown = styled.div`
  background-color:${({ theme }) => theme.nav.background}
`;
const ChainName = styled.span`
  color:${({ theme }) => theme.colors.text}
`;
const listStyle = {
  padding: 0,
  border: 'none',
  height: 30,
  display: 'flex',
  gap: '10px',
  textDecoration: 'none',
  cursor: 'pointer',
  alignItems: 'center'
};

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}

export interface ChainProps {
  disabled: boolean;
  chainId?: number;
  otherChainId?: number;
  handleChangeChain?: (chainId: number) => void;
}

export const BinanceIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" {...props}>
      <circle cx="8" cy="8" r="8" fill="#F0B90B" />
      <path
        d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
        fill="#FFFDFA"
      />
    </svg>
  );
};

export const ChevronDownIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export const EthereumIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <g fill="#FFF" fillRule="nonzero">
          <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
          <path d="M16.498 4L9 16.22l7.498-3.35z" />
          <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
          <path d="M16.498 27.995v-6.028L9 17.616z" />
          <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z" />
          <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
        </g>
      </g>
    </svg>
  );
};

export const AvalancheIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 1503 1504" fill="none" {...props}>
      <rect x="287" y="258" width="928" height="844" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z" fill="#E84142" />
    </svg>
  );
};

export const FantomIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" {...props}>
      <defs>
        <mask id="mask" x="10" y="6" width="93.1" height="20" maskUnits="userSpaceOnUse">
          <g id="a">
            <path fill="#fff" fillRule="evenodd" d="M10,6h93.1V26H10Z" />
          </g>
        </mask>
      </defs>
      <title>fa</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle fill="#13b5ec" cx="16" cy="16" r="16" />
          <g mask="url(#mask)">
            <path fill="#fff" fillRule="evenodd" d="M17.2,12.9l3.6-2.1V15Zm3.6,9L16,24.7l-4.8-2.8V17L16,19.8,20.8,17ZM11.2,10.8l3.6,2.1L11.2,15Zm5.4,3.1L20.2,16l-3.6,2.1Zm-1.2,4.2L11.8,16l3.6-2.1Zm4.8-8.3L16,12.2,11.8,9.8,16,7.3ZM10,9.4V22.5l6,3.4,6-3.4V9.4L16,6Z" />
          </g>
        </g>
      </g>
    </svg>
  )
}

const ChainSelect = ({ disabled, chainId, otherChainId, handleChangeChain }: ChainProps) => {

  const [chain, setChain] = useState(chainId)

  useEffect(() => {
    setChain(chainId)
  }, [chainId])

  const onChange = (val: number) => {
    if (handleChangeChain) {
      handleChangeChain(val)
      setChain(val)
    }
  }

  return (
    <Dropdown position="bottom"
      disabled={disabled}
      target={<MyButton style={{
        marginRight: '8px',
        padding: '5px 4px',
        borderRadius: '40px',
        alignItems: 'center',
        background: "#6C60F6",
        width: '150px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '6px'
      }}>
        {chain === 1 ? <EthereumIcon /> : chain === 56 ? <BinanceIcon /> : chain === 250 ? <FantomIcon /> : chain === 43114 ? <AvalancheIcon /> : <HelpIcon width='22px' height='22px' />}
        {chain === 1 ? 'Ethereum' : chain === 56 ? 'Binance' : chain === 250 ? 'Fantom' : chain === 43114 ? 'Avalanche' : 'Unknown'}
        <ChevronDownIcon />
      </MyButton>}>
      {/* <div style={{ backgroundColor: darkMode ? "#757B75" : "white", border: darkMode ? '1px solid rgba(255, 255, 255, 0.23)' : '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, width: 100, padding: 10 }}> */}
      <MyDropdown style={{
        borderRadius: '0px 0px 8px 8px',
        width: 130,
        background: '#6C60F6',
        padding: '0px 4px'
      }}>
        <span style={{
          ...listStyle,
          pointerEvents: otherChainId === 1 ? 'none' : 'initial',
          opacity: otherChainId === 1 ? '0.4' : '1'
        }}
          onClick={() => handleChangeChain ? onChange(1) : requestChainChange(1, setChain)}>
          <EthereumIcon />
          <ChainName style={{ fontFamily: 'Poppins' }}>Ethereum</ChainName>
        </span>
        <span style={{
          ...listStyle,
          pointerEvents: otherChainId === 56 ? 'none' : 'initial',
          opacity: otherChainId === 56 ? '0.4' : '1'
        }} onClick={() => handleChangeChain ? onChange(56) : requestChainChange(56, setChain)}>
          <BinanceIcon />
          <ChainName style={{ fontFamily: 'Poppins' }}>Binance</ChainName>
        </span>
        <span style={{
          ...listStyle,
          pointerEvents: otherChainId === 250 ? 'none' : 'initial',
          opacity: otherChainId === 250 ? '0.4' : '1'
        }} onClick={() => handleChangeChain ? onChange(250) : requestChainChange(250, setChain)}>
          <FantomIcon />
          <ChainName style={{ fontFamily: 'Poppins' }}>Fantom</ChainName>
        </span>
        <span style={{
          ...listStyle,
          pointerEvents: otherChainId === 43114 ? 'none' : 'initial',
          opacity: otherChainId === 43114 ? '0.4' : '1'
        }} onClick={() => handleChangeChain ? onChange(43114) : requestChainChange(43114, setChain)}>
          <AvalancheIcon />
          <ChainName style={{ fontFamily: 'Poppins' }}>Avalanche</ChainName>
        </span>
      </MyDropdown>
    </Dropdown>
  )
}

export default ChainSelect
import React from "react"

interface WindowChain {
  ethereum?: {
    isMetaMask?: true
    request?: (...args: any[]) => void
  }
}

const requestChainChange = async (chainId: number, setChain: (chain: number) => void) => {
  const provider = (window as WindowChain).ethereum
  if (provider !== undefined) {
    try {
      if (chainId === 1) {
        // @ts-ignore
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{
            chainId: '0x1'
          }]
        })
        setChain(1)
      } else if (chainId === 250) {
        // @ts-ignore
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xfa',
              chainName: 'Fantom Opera',
              nativeCurrency: {
                name: 'FTM',
                symbol: 'ftm',
                decimals: 18
              },
              rpcUrls: ["https://rpc.ftm.tools/"],
              blockExplorerUrls: ["https://ftmscan.com/"]
            }
          ]
        })
        setChain(250)
      } else if (chainId === 43114) {
        // @ts-ignore
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xA86A',
              chainName: 'Avalanche Mainnet C-Chain',
              nativeCurrency: {
                name: 'Avalanche',
                symbol: 'AVAX',
                decimals: 18
              },
              rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
              blockExplorerUrls: ["https://snowtrace.io/"]
            }
          ]
        })
        setChain(43114)
      }
      else {
        // @ts-ignore
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x38',
              chainName: 'Binance Smart Chain Mainnet',
              nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
              },
              rpcUrls: ["https://bsc-dataseed1.binance.org/"],
              blockExplorerUrls: ['https://bscscan.com/'],
            },
          ]
        })
        setChain(56)
      }
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the network on metamask because window.ethereum is undefined")
    return false
  }
}

export default requestChainChange
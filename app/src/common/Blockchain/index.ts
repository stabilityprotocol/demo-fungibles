import { UniversalWalletConnector } from "@magiclabs/wagmi-connector";
import { configureChains } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { Chain, createConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export const stbleTestnet: Chain = {
  id: 20180427,
  name: "Stability Testnet",
  network: "stability-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Decentralized Native Token",
    symbol: "DNT",
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: "Stability Testnet",
      url: "https://stability-testnet.blockscout.com/",
    },
  },
  rpcUrls: {
    default: {
      http: ["https://free.stabilityprotocol.com"],
    },
    public: {
      http: ["https://free.stabilityprotocol.com"],
    },
  },
  contracts: {
    multicall3: {
      // https://raw.githubusercontent.com/mds1/multicall/main/src/Multicall3.sol
      address: "0xFa8464fD7d2b92F147e7DF50593ce47358859aa7",
      blockCreated: 453,
    },
  },
};

export const { chains, publicClient } = configureChains(
  [stbleTestnet],
  [publicProvider()]
);

export const universalWallet = new UniversalWalletConnector({
  options: {
    apiKey: "pk_live_325490FF33DF46BD",
    magicSdkConfiguration: {
      network: {
        rpcUrl: "https://alphanet.stble.io", // your ethereum, polygon, or optimism mainnet/testnet rpc URL
        chainId: 20180427,
      },
    },
  },
});

export const config = createConfig({
  // autoConnect: true,
  connectors: [new InjectedConnector(), universalWallet],
  publicClient,
});

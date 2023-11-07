import { DedicatedWalletConnector } from "@magiclabs/wagmi-connector";
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
      http: ["https://free.testnet.stabilityprotocol.com"],
    },
    public: {
      http: ["https://free.testnet.stabilityprotocol.com"],
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

export const universalWallet = new DedicatedWalletConnector({
  options: {
    apiKey: "pk_live_ACB8ED7FCDEFDC21",
    magicSdkConfiguration: {
      network: {
        rpcUrl: "https://magic.free.testnet.stabilityprotocol.com",
        chainId: 20180427,
      },
    },
  },
});

export const universalWalletNoModals = new DedicatedWalletConnector({
  options: {
    apiKey: "pk_live_E3FEA2649D5D92A1",
    magicSdkConfiguration: {
      network: {
        rpcUrl: "https://magic.free.testnet.stabilityprotocol.com",
        chainId: 20180427,
      },
    },
  },
});

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector(),
    universalWallet,
    universalWalletNoModals,
  ],
  publicClient,
});

export const testnetFactories = {
  erc20Factory: "0x175351a38a16e60E20b3989E1566B5CC603bD493",
  erc1155Factory: "0x59026F4168fb26a0bFc8C5155C9B59d0DF2fD001",
} as const;

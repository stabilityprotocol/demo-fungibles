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
      address: "0x3ed62137c5DB927cb137c26455969116BF0c23Cb",
      blockCreated: 2318,
    },
  },
};

export const { chains, publicClient } = configureChains(
  [stbleTestnet],
  [publicProvider()]
);

export const mlWalletApiKey = window.location.search.includes("?mlModals")
  ? "pk_live_ACB8ED7FCDEFDC21"
  : "pk_live_E3FEA2649D5D92A1";

export const dedicatedWallet = new DedicatedWalletConnector({
  options: {
    apiKey: mlWalletApiKey,
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
  connectors: [new InjectedConnector(), dedicatedWallet],
  publicClient,
});

export const testnetFactories = {
  erc20Factory: "0xc01Ee7f10EA4aF4673cFff62710E1D7792aBa8f3",
  erc1155Factory: "0x970951a12F975E6762482ACA81E57D5A2A4e73F4",
} as const;

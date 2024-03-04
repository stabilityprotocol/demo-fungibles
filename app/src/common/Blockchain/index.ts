import { DedicatedWalletConnector } from "@magiclabs/wagmi-connector";
import { configureChains } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { createConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { stabilityTestnet } from "./Chains/StabilityTestnet";
import { GTN } from "./Chains/GTN";

export const { chains, publicClient } = configureChains(
  [stabilityTestnet, GTN],
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

export const chainsConfig = {
  GTN,
  testnet: stabilityTestnet,
};

export const tokenFactories = {
  GTN: {
    erc20Factory: "0x93637fE2f0bcA78b1c1DC9D73d8A59f66702F2a4",
    erc1155Factory: "0x29A4b5f6075588E4eF340e9eDC5FF9BDb901469D",
  },
  testnet: {
    erc20Factory: "0xc01Ee7f10EA4aF4673cFff62710E1D7792aBa8f3",
    erc1155Factory: "0x970951a12F975E6762482ACA81E57D5A2A4e73F4",
  },
};

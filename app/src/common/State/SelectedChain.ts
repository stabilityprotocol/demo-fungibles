import { atom } from "recoil";
import { localStorageEffect } from "./Utils";
import { stabilityTestnet } from "../Blockchain/Chains/StabilityTestnet";
// import { GTN } from "../Blockchain/Chains/GTN";

export enum CHAINS {
  // GTN = "GTN",
  TESTNET = "testnet",
}

export const ChainConfig = {
  // GTN,
  testnet: stabilityTestnet,
};

export const SelectedChainState = atom<CHAINS>({
  key: "SelectedChainState_v2",
  default: CHAINS.TESTNET,
  effects: [localStorageEffect<CHAINS>("SelectedChainState")],
});

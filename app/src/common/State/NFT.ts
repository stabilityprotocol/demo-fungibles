import { atom } from "recoil";

export type TNftState = {
  [blob: string]: Promise<{ cid: string }>;
};

export const NftState = atom<TNftState>({
  key: "NftState",
  default: {},
});

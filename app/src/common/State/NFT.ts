import { NFTStorage } from "nft.storage";
import { atom } from "recoil";

export type TNftState = {
  [blob: string]: Awaited<ReturnType<typeof NFTStorage.store>>;
};

export const NftState = atom<TNftState>({
  key: "NftState",
  default: {},
});

import { toHex } from "viem";
import { stbleTestnet } from ".";

export const useAddNetwork = () => {
  const addNetwork = () => {
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: toHex(stbleTestnet.id),
          rpcUrls: stbleTestnet.rpcUrls.default.http,
          chainName: stbleTestnet.name,
          nativeCurrency: stbleTestnet.nativeCurrency,
          blockExplorerUrls: [stbleTestnet.blockExplorers?.default.url],
        },
      ],
    });
  };

  return { addNetwork };
};

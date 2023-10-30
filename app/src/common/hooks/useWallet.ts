import { useMemo } from "react";
import { useNetwork, useWalletClient } from "wagmi";
import { stbleTestnet } from "../Blockchain";

const appNetwork = stbleTestnet.id;

export const useWallet = () => {
  const { data: walletClient } = useWalletClient();
  const { chain } = useNetwork();

  const isWrongNetwork = useMemo(() => chain?.id !== appNetwork, [chain?.id]);

  const switchChain = async () => {
    walletClient?.switchChain(stbleTestnet).catch(async () => {
      await walletClient
        ?.addChain({ chain: stbleTestnet })
        .then(() => walletClient?.switchChain(stbleTestnet));
    });
  };

  const addChain = async () => {
    walletClient?.addChain({ chain: stbleTestnet });
  };

  return {
    chain,
    walletClient,
    isWrongNetwork,
    switchChain,
    addChain,
  };
};

import { useEffect, useMemo, useState } from "react";
import { useWalletClient } from "wagmi";
import { stbleTestnet } from "../Blockchain";

export const useWallet = () => {
  const { data: walletClient } = useWalletClient();
  const [currentChainId, setCurrentChainId] = useState<number | undefined>();
  const appNetwork = stbleTestnet.id;

  const isWrongNetwork = useMemo(
    () => currentChainId !== appNetwork,
    [appNetwork, currentChainId]
  );

  useEffect(() => {
    if (walletClient) {
      walletClient.getChainId().then(setCurrentChainId);
    }
  }, [walletClient]);

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
    currentChainId,
    walletClient,
    isWrongNetwork,
    switchChain,
    addChain,
  };
};

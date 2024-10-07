import { useEffect, useMemo } from "react";
import { WalletClient, useNetwork, useWalletClient } from "wagmi";
import { BrowserProvider } from "ethers";
import { useRecoilValue } from "recoil";
import { SelectedChainState } from "../State/SelectedChain";
import { chainsConfig } from "../Blockchain";

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, transport } = walletClient;
  const provider = new BrowserProvider(transport);
  const signer = provider.getSigner(account.address);
  return signer;
}

export const useWallet = () => {
  const { data: walletClient } = useWalletClient();
  const { chain } = useNetwork();
  const selectedChain = useRecoilValue(SelectedChainState);

  const isWrongNetwork = useMemo(
    () => chain?.id !== chainsConfig[selectedChain].id,
    [chain?.id, selectedChain]
  );

  const switchChain = async () => {
    walletClient?.switchChain(chainsConfig[selectedChain]).catch(async () => {
      await walletClient
        ?.addChain({ chain: chainsConfig[selectedChain] })
        .then(() => walletClient?.switchChain(chainsConfig[selectedChain]));
    });
  };

  const addChain = async () => {
    walletClient?.addChain({ chain: chainsConfig[selectedChain] });
  };

  const ethersSigner = useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );

  useEffect(() => {
    console.log("selectedChain", selectedChain);
  }, [selectedChain]);

  return {
    chain,
    walletClient,
    isWrongNetwork,
    ethersSigner,
    switchChain,
    addChain,
  };
};

import { useMemo } from "react";
import { WalletClient, useNetwork, useWalletClient } from "wagmi";
import { stbleTestnet } from "../Blockchain";
import { BrowserProvider } from "ethers";

const appNetwork = stbleTestnet.id;

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, transport } = walletClient;
  const provider = new BrowserProvider(transport);
  const signer = provider.getSigner(account.address);
  return signer;
}

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

  const ethersSigner = useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );

  return {
    chain,
    walletClient,
    isWrongNetwork,
    ethersSigner,
    switchChain,
    addChain,
  };
};

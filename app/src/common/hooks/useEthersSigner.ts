import * as React from "react";
import { type WalletClient, useWalletClient } from "wagmi";
import { BrowserProvider } from "ethers";

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, transport } = walletClient;
  const provider = new BrowserProvider(transport);
  const signer = provider.getSigner(account.address);
  return signer;
}

export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );
}

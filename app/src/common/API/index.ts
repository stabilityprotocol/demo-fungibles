import useSWR from "swr";
import { Address, Transaction } from "viem";
import EnStrings from "../i18n/en.json";
import { SelectedChainState, CHAINS } from "../State/SelectedChain";
import { useRecoilValue } from "recoil";

export async function fetcher<JSON = object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export const endpoints = {
  count: "/v1/free-transactions/count",
  addressInfo: "/v1/free-transactions/$1",
} satisfies Record<string, string>;

export function useApiEndpoint() {
  const selectedChain = useRecoilValue(SelectedChainState);

  const getBaseEndpoint = () => {
    if (selectedChain === CHAINS.TESTNET) {
      return EnStrings.links["testnet-api"];
    }
    return EnStrings.links["GTN-api"];
  };

  const getApiEndpoint = (
    endpointName: keyof typeof endpoints,
    replace?: string
  ) => {
    const endpoint = getBaseEndpoint() + endpoints[endpointName];
    if (replace) {
      return endpoint.replace("$1", replace);
    }
    return endpoint;
  };

  return {
    selectedChain,
    getApiEndpoint,
  };
}

export function useTransactionCount() {
  const { getApiEndpoint } = useApiEndpoint();
  const { data, error, isLoading } = useSWR<{ result: number }>(
    getApiEndpoint("count"),
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    data,
    isLoading,
    isError: error,
  };
}

export type EthInfoDTO = {
  result: {
    remaining: number;
    transactions: {
      created_at: string;
      id: string;
      payload: Transaction;
    }[];
  };
};

export function useEthAddressInfo(ethAddress?: Address) {
  const { getApiEndpoint } = useApiEndpoint();
  const { data, error, isLoading } = useSWR<EthInfoDTO>(
    ethAddress ? getApiEndpoint("addressInfo", ethAddress) : null,
    fetcher,
    { refreshInterval: 60_000 }
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function createIpfsLinkFromCidr(cidr: string) {
  return `https://ipfs.io/ipfs/${cidr}`;
}

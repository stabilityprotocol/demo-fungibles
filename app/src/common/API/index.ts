import useSWR from "swr";
import { Address, Transaction } from "viem";
import EnStrings from "../i18n/en.json";

export async function fetcher<JSON = object>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const BASE_ENDPOINT = EnStrings.links["testnet-api"];

export const endpoints = {
  count: "/v1/free-transactions/count",
  addressInfo: "/v1/free-transactions/$1",
} satisfies Record<string, string>;

export function getApiEndpoint(
  endpointName: keyof typeof endpoints,
  replace?: string
) {
  const endpoint = BASE_ENDPOINT + endpoints[endpointName];
  if (replace) {
    return endpoint.replace("$1", replace);
  }
  return endpoint;
}

export function useTransactionCount() {
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

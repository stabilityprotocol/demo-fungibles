import { Address } from "viem";

export function shortAddress(address: Address | string) {
  return `${address.slice(0, 8)}...${address.slice(-6)}`;
}

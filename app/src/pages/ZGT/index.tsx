import { useAccount } from "wagmi";
import { useEthAddressInfo } from "../../common/API";
import { ZgtStatsWrapper, ZgtWrapper } from "./Styles";
import { AccountSelector } from "./components/AccountSelector";
import {
  ZgtLastTransaction,
  ZgtRemainingTransactions,
  ZgtTimerToReset,
  ZgtTotalFreeTransactions,
} from "./components/Stats";
import { TransactionHistory } from "./components/TransactionHistory";

export const ZGT = () => {
  const { address } = useAccount();
  const { data } = useEthAddressInfo(address);

  return (
    <ZgtWrapper>
      <AccountSelector />
      <ZgtStatsWrapper>
        <ZgtRemainingTransactions remaining={data?.result.remaining} />
        <ZgtTimerToReset />
        <ZgtTotalFreeTransactions />
        <ZgtLastTransaction transactions={data?.result.transactions} />
      </ZgtStatsWrapper>
      <TransactionHistory transactions={data?.result.transactions} />
    </ZgtWrapper>
  );
};

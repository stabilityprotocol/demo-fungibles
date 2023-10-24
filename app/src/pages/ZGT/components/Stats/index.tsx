import { useTranslation } from "react-i18next";
import { StatDetails, StatIcon, StatsWrapper } from "./Styles";
import { IoIosSwap } from "react-icons/io";
import { LuTimerReset } from "react-icons/lu";
import { BsFillClockFill, BsFillTagFill } from "react-icons/bs";
import { Timer } from "./Timer";
import { EthInfoDTO } from "../../../../common/API";
import { useEffect, useMemo, useState } from "react";
import { BlockLoading } from "../../../../components/BlockLoading";
import { useAccount, usePublicClient } from "wagmi";

export const ZgtRemainingTransactions: React.FC<{ remaining?: number }> = ({
  remaining,
}) => {
  const { t } = useTranslation();

  const Remaining = useMemo(
    () => () => {
      if (remaining === undefined) {
        return <BlockLoading width="2rem" height="1.25rem" />;
      }
      return <span>{remaining}</span>;
    },
    [remaining]
  );

  return (
    <StatsWrapper>
      <StatDetails>
        <StatIcon>
          <IoIosSwap />
        </StatIcon>
        <span>{t("pages.zgt.stats.remainingTransactions")}</span>
      </StatDetails>
      <Remaining />
    </StatsWrapper>
  );
};

export const ZgtTimerToReset = () => {
  const { t } = useTranslation();
  return (
    <StatsWrapper>
      <StatDetails>
        <StatIcon>
          <LuTimerReset />
        </StatIcon>
        <span>{t("pages.zgt.stats.timerReset")}</span>
      </StatDetails>
      <span>
        <Timer />
      </span>
    </StatsWrapper>
  );
};

export const ZgtTotalFreeTransactions = () => {
  const { t } = useTranslation();
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [transactionCount, setTransactionCount] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (address === undefined) {
      return;
    }
    const getTransactionCount = async () => {
      publicClient.getTransactionCount({ address }).then((count) => {
        setTransactionCount(count);
      });
    };
    getTransactionCount();
  }, [address, publicClient]);

  const TotalTransactions = useMemo(
    () => () => {
      if (transactionCount === undefined) {
        return <BlockLoading width="2rem" height="1.25rem" />;
      }
      return <span>{transactionCount}</span>;
    },
    [transactionCount]
  );

  return (
    <StatsWrapper>
      <StatDetails>
        <StatIcon>
          <BsFillTagFill />
        </StatIcon>
        <span>{t("pages.zgt.stats.transactionsSubmitted")}</span>
      </StatDetails>
      <TotalTransactions />
    </StatsWrapper>
  );
};

export const ZgtLastTransaction: React.FC<{
  transactions?: EthInfoDTO["result"]["transactions"];
}> = ({ transactions }) => {
  const { t } = useTranslation();

  const LastTransaction = useMemo(
    () => () => {
      if (transactions === undefined) {
        return <BlockLoading width="6rem" height="1.25rem" />;
      }
      return transactions[0] ? (
        <span>{new Date(transactions[0].created_at).toLocaleString()}</span>
      ) : (
        <span>N/A</span>
      );
    },
    [transactions]
  );

  return (
    <StatsWrapper>
      <StatDetails>
        <StatIcon>
          <BsFillClockFill />
        </StatIcon>
        <span>{t("pages.zgt.stats.lastTransaction")}</span>
      </StatDetails>
      <LastTransaction />
    </StatsWrapper>
  );
};

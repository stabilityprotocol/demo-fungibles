import { useTranslation } from "react-i18next";
import {
  TransactionHistoryTitle,
  TransactionHistoryWrapper,
  TransactionItemWrapper,
  TransactionList,
} from "./Styles";
import { FiLink2 } from "react-icons/fi";
import { EthInfoDTO } from "../../../../common/API";
import { BlockLoading } from "../../../../components/BlockLoading";
import { useMemo } from "react";

export const TransactionHistory: React.FC<{
  transactions?: EthInfoDTO["result"]["transactions"];
}> = ({ transactions }) => {
  const { t } = useTranslation();

  const Content = useMemo(
    () => () => {
      if (!transactions) {
        return [...new Array(5)].map(() => <TransactionItemSkeleton />);
      }
      return transactions?.map((transaction) => (
        <TransactionItem {...{ transaction: transaction }} />
      ));
    },
    [transactions]
  );

  return (
    <TransactionHistoryWrapper>
      <TransactionHistoryTitle>
        {t("pages.zgt.transactionHistory.title")}
      </TransactionHistoryTitle>
      <TransactionList>
        <Content />
      </TransactionList>
    </TransactionHistoryWrapper>
  );
};

export const TransactionItem: React.FC<{
  transaction: EthInfoDTO["result"]["transactions"][number];
}> = ({ transaction }) => {
  const { t } = useTranslation();
  return (
    <TransactionItemWrapper>
      <span>
        <a
          href={t("links.explorerTx", {
            hash: transaction.payload.hash,
          })}
          target="_blank"
          rel="noreferrer"
        >
          {transaction.payload.hash} <FiLink2 />
        </a>
      </span>
      <span>{new Date(transaction.created_at).toUTCString()}</span>
    </TransactionItemWrapper>
  );
};

export const TransactionItemSkeleton: React.FC = () => {
  return (
    <TransactionItemWrapper>
      <BlockLoading width="70%" height="1rem" />
      <BlockLoading width="20%" height="1rem" />
    </TransactionItemWrapper>
  );
};

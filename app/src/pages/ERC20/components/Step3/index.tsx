import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiSolidMagicWand } from "react-icons/bi";
import { ERC20Props } from "../..";
import { ButtonSmallAction } from "../../../../components/Button";
import {
  Step3ActionsWrapper,
  Step3DeploymentInfoWrapper,
  Step3Wrapper,
} from "./Styles";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { useWalletClient } from "wagmi";
import { shortAddress } from "../../../../common/ETH";
import { useCallback, useEffect } from "react";

export const Step3: React.FC<ERC20Props> = ({
  tokenName,
  tokenSymbol,
  tokenMetadata,
  setMintAmount,
  setTokenName,
  setTokenSymbol,
  setStep,
}) => {
  const { t } = useTranslation();
  const { data: walletClient } = useWalletClient();

  const onAddTokenClick = useCallback(() => {
    if (!tokenMetadata) return;
    walletClient?.watchAsset({
      type: "ERC20",
      options: {
        address: tokenMetadata.address,
        symbol: tokenSymbol,
        decimals: 18,
      },
    });
  }, [tokenMetadata, tokenSymbol, walletClient]);

  const onCreateAnotherClick = useCallback(() => {
    setTokenName("");
    setTokenSymbol("");
    setMintAmount("");
    setStep(1);
  }, [setMintAmount, setStep, setTokenName, setTokenSymbol]);

  useEffect(() => {
    if (!tokenMetadata) {
      setStep(2);
    }
  }, [setStep, tokenMetadata]);

  return tokenMetadata ? (
    <Step3Wrapper>
      <StepHeader>{t("pages.erc20.step3.title")}</StepHeader>
      <Step3DeploymentInfoWrapper>
        <div>{t("pages.erc20.step3.tokenDetail.title")}</div>
        <ul>
          <li>
            {t("pages.erc20.step3.tokenDetail.name")}: {tokenName}
          </li>
          <li>
            {t("pages.erc20.step3.tokenDetail.symbol")}: {tokenSymbol}
          </li>
          <li>
            {t("pages.erc20.step3.tokenDetail.address")}:{" "}
            <a
              href={t("links.explorerAddress", {
                address: tokenMetadata.address,
              })}
              target="_blank"
              rel="noreferrer"
            >
              {shortAddress(tokenMetadata.address)}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            {t("pages.erc20.step3.tokenDetail.transactionHash")}:{" "}
            <a
              href={t("links.explorerTx", {
                hash: tokenMetadata.transactionHash,
              })}
              target="_blank"
              rel="noreferrer"
            >
              {shortAddress(tokenMetadata.transactionHash)}
            </a>
          </li>
          <li>
            {t("pages.erc20.step3.tokenDetail.blockNumber")}:{" "}
            <a
              href={t("links.explorerBlock", {
                blockNumber: tokenMetadata.blocknumber.toString(),
              })}
              target="_blank"
              rel="noreferrer"
            >
              {tokenMetadata.blocknumber.toString()}
            </a>
          </li>
        </ul>
      </Step3DeploymentInfoWrapper>
      <Step3ActionsWrapper>
        <ButtonSmallAction onClick={onAddTokenClick}>
          {t("pages.erc20.step3.action")} <BsFillArrowRightCircleFill />
        </ButtonSmallAction>
        <ButtonSmallAction onClick={onCreateAnotherClick}>
          {t("pages.erc20.step3.actionBack")} <BiSolidMagicWand />
        </ButtonSmallAction>
      </Step3ActionsWrapper>
    </Step3Wrapper>
  ) : null;
};

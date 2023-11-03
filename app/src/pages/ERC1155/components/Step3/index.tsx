import { BiSolidMagicWand } from "react-icons/bi";
import { ERC1155Props } from "../..";
import { ButtonSmallAction } from "../../../../components/Button";
import {
  Step3ActionsWrapper,
  Step3DeploymentInfoWrapper,
  Step3Wrapper,
} from "./Styles";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { shortAddress } from "../../../../common/ETH";
import { useCallback, useEffect } from "react";
import { createIpfsLinkFromCidr } from "../../../../common/API";

export const Step3: React.FC<ERC1155Props> = ({
  tokenName,
  tokenMetadata,
  setTokenName,
  setImageFile,
  setTokenMetadata,
  setStep,
}) => {
  const { t } = useTranslation();

  const onCreateAnotherClick = useCallback(() => {
    setTokenName("");
    setImageFile(undefined);
    setTokenMetadata(undefined);
    setStep(1);
  }, [setImageFile, setStep, setTokenMetadata, setTokenName]);

  useEffect(() => {
    if (!tokenMetadata) {
      setStep(2);
    }
  }, [setStep, tokenMetadata]);

  return tokenMetadata ? (
    <Step3Wrapper>
      <StepHeader>{t("pages.erc1155.step3.title")}</StepHeader>
      <Step3DeploymentInfoWrapper>
        <div>{t("pages.erc1155.step3.tokenDetail.title")}</div>
        <ul>
          <li>
            {t("pages.erc1155.step3.tokenDetail.name")}: {tokenName}
          </li>
          <li>
            {t("pages.erc1155.step3.tokenDetail.address")}:{" "}
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
          <li>
            {t("pages.erc1155.step3.tokenDetail.metadata")}:{" "}
            <a
              href={createIpfsLinkFromCidr(tokenMetadata.ipfsData.ipnft)}
              target="_blank"
              rel="noreferrer"
            >
              {shortAddress(
                createIpfsLinkFromCidr(tokenMetadata.ipfsData.ipnft)
              )}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            {t("pages.erc1155.step3.tokenDetail.transactionHash")}:{" "}
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
            {t("pages.erc1155.step3.tokenDetail.blockNumber")}:{" "}
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
        <ButtonSmallAction onClick={onCreateAnotherClick}>
          {t("pages.erc1155.step3.actionBack")} <BiSolidMagicWand />
        </ButtonSmallAction>
      </Step3ActionsWrapper>
    </Step3Wrapper>
  ) : null;
};

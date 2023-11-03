import { BiSolidMagicWand } from "react-icons/bi";
import { ERC1155Props } from "../..";
import { ButtonSmallAction } from "../../../../components/Button";
import {
  Step3ActionsWrapper,
  Step3DeploymentInfoWrapper,
  Step3NftPreview,
  Step3Wrapper,
} from "./Styles";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { shortAddress } from "../../../../common/ETH";
import { useCallback, useEffect, useMemo } from "react";
import { createIpfsLinkFromCidr } from "../../../../common/API";

export const Step3: React.FC<ERC1155Props> = ({
  tokenName,
  tokenMetadata,
  imageFile,
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

  const imgObject = useMemo(() => {
    if (!imageFile) return undefined;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  return tokenMetadata ? (
    <Step3Wrapper>
      <StepHeader>{t("pages.erc1155.step3.title")}</StepHeader>
      {imgObject && (
        <Step3NftPreview>
          <a
            href={createIpfsImgLink(tokenMetadata.ipfsData.data.image.href)}
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgObject} alt="Your NFT" />
          </a>
        </Step3NftPreview>
      )}
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

function createIpfsImgLink(ipfsHref: string) {
  return "https://ipfs.io/ipfs/" + ipfsHref.replace("ipfs://", "");
}

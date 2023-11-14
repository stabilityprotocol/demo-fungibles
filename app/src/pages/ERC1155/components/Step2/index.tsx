import { BsFillArrowRightCircleFill, BsFillCircleFill } from "react-icons/bs";
import { ERC1155Props } from "../..";
import { ButtonSmall, ButtonSmallAction } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import {
  Step2ActionsWrapper,
  Step2InputWrapper,
  Step2InputsWrapper,
  Step2Wrapper,
} from "./Styles";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { Validation } from "./Validation";
import { useCallback, useMemo, useState } from "react";
import { tokenNameSchema } from "./Schemas";
import { usePublicClient } from "wagmi";
import { erc1155Contract } from "./Contract";
import { testnetFactories } from "../../../../common/Blockchain";
import { LoadingIcon } from "../../../../components/LoadingIcon";
import { useWallet } from "../../../../common/hooks/useWallet";
import { useNftStorage } from "../../../../common/hooks/useNftStorage";
import { createIpfsLinkFromCidr } from "../../../../common/API";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useEffectOnce } from "usehooks-ts";

export const Step2: React.FC<ERC1155Props> = (props) => {
  const { t } = useTranslation();
  const { isWrongNetwork, walletClient, ethersSigner } = useWallet();
  const publicClient = usePublicClient();
  const [loading, setLoading] = useState(false);
  const { uploadNftData } = useNftStorage();
  const {
    tokenName,
    imageFile,
    collectionDescription,
    setStep,
    setTokenName,
    setTokenMetadata,
  } = props;
  const isValid = useMemo(() => {
    const tokenNameValid = tokenNameSchema.safeParse(tokenName);
    return tokenNameValid.success && imageFile !== undefined && !isWrongNetwork;
  }, [tokenName, imageFile, isWrongNetwork]);

  const uploadMetadata = useCallback(async () => {
    if (!tokenName || !imageFile) return undefined;
    return uploadNftData(tokenName, collectionDescription, imageFile);
  }, [collectionDescription, imageFile, tokenName, uploadNftData]);

  useEffectOnce(() => {
    uploadMetadata();
  });

  const onDeployClick = useCallback(async () => {
    if (walletClient) {
      setLoading(true);
      try {
        const uploadJsonDataPromise = await uploadMetadata();
        const signer = await ethersSigner;
        const contract = new ethers.Contract(
          testnetFactories.erc1155Factory,
          erc1155Contract.abi,
          signer
        );
        const deploymentInfo = await contract.deployAndMintERC1155(
          tokenName,
          createIpfsLinkFromCidr(uploadJsonDataPromise!.ipnft)
        );
        console.log("ERC1155 Deployment Info");
        console.table(deploymentInfo);
        const initTime = Date.now();
        const deployment = await publicClient.waitForTransactionReceipt({
          hash: deploymentInfo.hash,
          timeout: 300_000,
        });
        setTokenMetadata({
          address: deployment.logs[0].address,
          blocknumber: deployment.blockNumber,
          transactionHash: deployment.transactionHash,
          ipfsData: uploadJsonDataPromise!,
        });
        console.log("deployment total milliseconds", Date.now() - initTime);
        setStep(3);
      } catch (err) {
        console.error(err);
        toast.error(t("pages.erc1155.step2.error"));
        setLoading(false);
      }
    }
  }, [
    walletClient,
    uploadMetadata,
    ethersSigner,
    tokenName,
    publicClient,
    setTokenMetadata,
    setStep,
    t,
  ]);

  return (
    <Step2Wrapper>
      <StepHeader>{t("pages.erc20.step2.title")}</StepHeader>
      <Step2InputsWrapper>
        <Step2InputWrapper>
          <Input
            icon={<BsFillCircleFill />}
            value={tokenName}
            placeholder={t("pages.erc20.step1.tokenName")}
            onChange={(e) => setTokenName(e)}
            disabled
          />
        </Step2InputWrapper>
        {/* {metadataUploaded && (
          <Step2InputWrapper>
            <Input
              icon={<AiOutlinePicture />}
              value={createIpfsLinkFromCidr(metadataUploaded.ipnft)}
              placeholder={t("pages.erc20.step1.tokenName")}
              onChange={(e) => setTokenName(e)}
              disabled
            />
          </Step2InputWrapper>
        )} */}
      </Step2InputsWrapper>

      <Validation {...props} />

      <Step2ActionsWrapper>
        {loading ? (
          <div className="loading">
            <ButtonSmallAction>
              {t("pages.erc20.step2.loading")}
              <LoadingIcon />
            </ButtonSmallAction>
          </div>
        ) : (
          <>
            <ButtonSmall onClick={() => setStep(1)}>
              {t("pages.erc20.step2.back")}
            </ButtonSmall>
            {isValid && (
              <ButtonSmallAction onClick={() => onDeployClick()}>
                {t("pages.erc20.step2.confirm")} <BsFillArrowRightCircleFill />
              </ButtonSmallAction>
            )}
          </>
        )}
      </Step2ActionsWrapper>
    </Step2Wrapper>
  );
};

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
import { useCallback, useEffect, useMemo, useState } from "react";
import { tokenNameSchema } from "./Schemas";
import { usePublicClient } from "wagmi";
import { erc1155Contract } from "./Contract";
import { stbleTestnet, testnetFactories } from "../../../../common/Blockchain";
import { LoadingIcon } from "../../../../components/LoadingIcon";
import { useWallet } from "../../../../common/hooks/useWallet";
import { useNftStorage } from "../../../../common/hooks/useNftStorage";
import { TNftState } from "../../../../common/State/NFT";
import { AiOutlinePicture } from "react-icons/ai";
import { writeContract } from "viem/actions";
import { prepareWriteContract } from "wagmi/actions";
import { createIpfsLinkFromCidr } from "../../../../common/API";

export const Step2: React.FC<ERC1155Props> = (props) => {
  const { t } = useTranslation();
  const { isWrongNetwork, walletClient } = useWallet();
  const publicClient = usePublicClient();
  const [loading, setLoading] = useState(false);
  const { uploadNftData } = useNftStorage();
  const { tokenName, imageFile, setStep, setTokenName, setTokenMetadata } =
    props;
  const [metadataUploaded, setMetadataUploaded] = useState<TNftState[string]>();
  console.log("🚀 ~ file: index.tsx:35 ~ metadataUploaded:", metadataUploaded);

  const isValid = useMemo(() => {
    const tokenNameValid = tokenNameSchema.safeParse(tokenName);
    return tokenNameValid.success && imageFile !== undefined && !isWrongNetwork;
  }, [tokenName, imageFile, isWrongNetwork]);

  const uploadMetadata = useCallback(async () => {
    if (!tokenName || !imageFile) return undefined;
    return uploadNftData(tokenName, imageFile);
  }, [imageFile, tokenName, uploadNftData]);

  useEffect(() => {
    if (metadataUploaded) return;
    uploadMetadata().then((res) => {
      console.info("metadata uploaded", res);
      setMetadataUploaded(res);
    });
  }, [metadataUploaded, uploadMetadata]);

  const onDeployClick = useCallback(async () => {
    if (walletClient) {
      setLoading(true);
      try {
        const uploadJsonDataPromise = await uploadMetadata();
        const { request } = await prepareWriteContract({
          abi: erc1155Contract.abi,
          address: testnetFactories.erc1155Factory,
          chainId: stbleTestnet.id,
          functionName: "deployAndMintERC1155",
          args: [
            tokenName,
            createIpfsLinkFromCidr(uploadJsonDataPromise!.ipnft),
          ],
        });
        const deploymentHash = await writeContract(walletClient, {
          ...request,
          chain: stbleTestnet,
        });
        const initTime = Date.now();
        const deployment = await publicClient.waitForTransactionReceipt({
          hash: deploymentHash,
          timeout: 120_000,
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
        setLoading(false);
        console.error(err);
      }
    }
  }, [
    publicClient,
    setStep,
    setTokenMetadata,
    tokenName,
    uploadMetadata,
    walletClient,
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
        {metadataUploaded && (
          <Step2InputWrapper>
            <Input
              icon={<AiOutlinePicture />}
              value={createIpfsLinkFromCidr(metadataUploaded.ipnft)}
              placeholder={t("pages.erc20.step1.tokenName")}
              onChange={(e) => setTokenName(e)}
              disabled
            />
          </Step2InputWrapper>
        )}
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

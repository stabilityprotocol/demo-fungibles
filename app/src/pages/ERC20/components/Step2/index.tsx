import { BsFillArrowRightCircleFill, BsFillCircleFill } from "react-icons/bs";
import { ERC20Props } from "../..";
import { ButtonSmall, ButtonSmallAction } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import {
  Step2ActionsWrapper,
  Step2InputWrapper,
  Step2InputsWrapper,
  Step2Wrapper,
} from "./Styles";
import { GoDatabase } from "react-icons/go";
import { PiDiamondsFourFill } from "react-icons/pi";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { Validation } from "./Validation";
import { useCallback, useMemo, useState } from "react";
import {
  tokenNameSchema,
  tokenSymbolSchema,
  amountToMintSchema,
} from "./Schemas";
import { usePublicClient } from "wagmi";
import { erc20Contract } from "./Contract";
import { stbleTestnet, testnetFactories } from "../../../../common/Blockchain";
import { LoadingIcon } from "../../../../components/LoadingIcon";
import { useWallet } from "../../../../common/hooks/useWallet";
import { writeContract } from "viem/actions";
import { prepareWriteContract } from "wagmi/actions";

export const Step2: React.FC<ERC20Props> = (props) => {
  const { t } = useTranslation();
  const { isWrongNetwork, walletClient } = useWallet();
  const publicClient = usePublicClient();
  const [loading, setLoading] = useState(false);
  const {
    tokenName,
    tokenSymbol,
    mintAmount,
    setStep,
    setTokenName,
    setTokenSymbol,
    setMintAmount,
    setTokenMetadata,
  } = props;

  const isValid = useMemo(() => {
    const tokenNameValid = tokenNameSchema.safeParse(tokenName);
    const tokenSymbolValid = tokenSymbolSchema.safeParse(tokenSymbol);
    const mintAmountValid = amountToMintSchema.safeParse(mintAmount);
    return (
      tokenNameValid.success &&
      tokenSymbolValid.success &&
      mintAmountValid.success &&
      !isWrongNetwork
    );
  }, [tokenName, tokenSymbol, mintAmount, isWrongNetwork]);

  const onDeployClick = useCallback(async () => {
    if (walletClient) {
      try {
        setLoading(true);
        const normalizedAmount = BigInt(mintAmount) * BigInt(10 ** 18);
        const normalizedSymbol = tokenSymbol.toUpperCase();
        const { request } = await prepareWriteContract({
          abi: erc20Contract.abi,
          address: testnetFactories.erc20Factory,
          chainId: stbleTestnet.id,
          functionName: "deployAndMintERC20",
          args: [tokenName, normalizedSymbol, normalizedAmount],
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
        });
        console.log("deployment total milliseconds", Date.now() - initTime);
        setStep(3);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    }
  }, [
    mintAmount,
    publicClient,
    setStep,
    setTokenMetadata,
    tokenName,
    tokenSymbol,
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
        <Step2InputWrapper>
          <Input
            icon={<GoDatabase />}
            value={tokenSymbol}
            placeholder={t("pages.erc20.step1.tokenSymbol")}
            onChange={(e) => setTokenSymbol(e)}
            disabled
          />
        </Step2InputWrapper>
        <Step2InputWrapper>
          <Input
            icon={<PiDiamondsFourFill />}
            value={mintAmount}
            placeholder={t("pages.erc20.step1.amountToMint")}
            onChange={(e) => setMintAmount(e)}
            disabled
          />
        </Step2InputWrapper>
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

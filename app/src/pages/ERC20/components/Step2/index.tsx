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
import { useMemo } from "react";
import {
  tokenNameSchema,
  tokenSymbolSchema,
  amountToMintSchema,
} from "./Schemas";

export const Step2: React.FC<ERC20Props> = (props) => {
  const { t } = useTranslation();
  const {
    tokenName,
    tokenSymbol,
    mintAmount,
    setStep,
    setTokenName,
    setTokenSymbol,
    setMintAmount,
  } = props;

  const isValid = useMemo(() => {
    const tokenNameValid = tokenNameSchema.safeParse(tokenName);
    const tokenSymbolValid = tokenSymbolSchema.safeParse(tokenSymbol);
    const mintAmountValid = amountToMintSchema.safeParse(mintAmount);
    return (
      tokenNameValid.success &&
      tokenSymbolValid.success &&
      mintAmountValid.success
    );
  }, [tokenName, tokenSymbol, mintAmount]);

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
        <ButtonSmall onClick={() => setStep(1)}>
          {t("pages.erc20.step2.back")}
        </ButtonSmall>
        {isValid && (
          <ButtonSmallAction onClick={() => setStep(3)}>
            {t("pages.erc20.step2.confirm")} <BsFillArrowRightCircleFill />
          </ButtonSmallAction>
        )}
      </Step2ActionsWrapper>
    </Step2Wrapper>
  );
};

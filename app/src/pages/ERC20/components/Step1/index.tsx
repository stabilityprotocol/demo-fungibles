import { BsFillArrowRightCircleFill, BsFillCircleFill } from "react-icons/bs";
import { ERC20Props } from "../..";
import { ButtonSmallAction } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import {
  Step1ActionsWrapper,
  Step1InputWrapper,
  Step1InputsWrapper,
  Step1Wrapper,
} from "./Styles";
import { GoDatabase } from "react-icons/go";
import { PiDiamondsFourFill } from "react-icons/pi";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";

export const Step1: React.FC<ERC20Props> = (props) => {
  const {
    tokenName,
    tokenSymbol,
    mintAmount,
    setStep,
    setTokenName,
    setTokenSymbol,
    setMintAmount,
  } = props;
  const { t } = useTranslation();

  return (
    <Step1Wrapper>
      <StepHeader>{t("pages.erc20.step1.title")}</StepHeader>
      <Step1InputsWrapper>
        <Step1InputWrapper>
          <Input
            icon={<BsFillCircleFill />}
            value={tokenName}
            placeholder={t("pages.erc20.step1.tokenName")}
            onChange={(e) => setTokenName(e)}
          />
        </Step1InputWrapper>
        <Step1InputWrapper>
          <Input
            icon={<GoDatabase />}
            value={tokenSymbol}
            placeholder={t("pages.erc20.step1.tokenSymbol")}
            onChange={(e) => setTokenSymbol(e)}
          />
        </Step1InputWrapper>
        <Step1InputWrapper>
          <Input
            icon={<PiDiamondsFourFill />}
            value={mintAmount}
            placeholder={t("pages.erc20.step1.amountToMint")}
            onChange={(e) => setMintAmount(e)}
          />
        </Step1InputWrapper>
      </Step1InputsWrapper>

      <Step1ActionsWrapper>
        <ButtonSmallAction onClick={() => setStep(2)}>
          {t("pages.erc20.step1.action")} <BsFillArrowRightCircleFill />
        </ButtonSmallAction>
      </Step1ActionsWrapper>
    </Step1Wrapper>
  );
};

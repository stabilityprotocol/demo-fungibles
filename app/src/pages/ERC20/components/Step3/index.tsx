import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ERC20Props } from "../..";
import { ButtonSmallAction } from "../../../../components/Button";
import { Step3ActionsWrapper, Step3Wrapper } from "./Styles";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { useAccount } from "wagmi";
import { shortAddress } from "../../../../common/ETH";

export const Step3: React.FC<ERC20Props> = ({
  tokenName,
  tokenSymbol,
  mintAmount,
}) => {
  const { t } = useTranslation();
  const { address } = useAccount();

  return (
    <Step3Wrapper>
      <StepHeader>{t("pages.erc20.step3.title")}</StepHeader>
      <div>
        {t("pages.erc20.step3.creationInfo", {
          name: tokenName,
          symbol: tokenSymbol,
          amount: mintAmount,
          address: shortAddress(address ?? "0x"),
        })}
      </div>
      <div>{t("pages.erc20.step3.transactionInfo")}</div>
      <Step3ActionsWrapper>
        <ButtonSmallAction onClick={() => {}}>
          {t("pages.erc20.step3.action")} <BsFillArrowRightCircleFill />
        </ButtonSmallAction>
      </Step3ActionsWrapper>
    </Step3Wrapper>
  );
};

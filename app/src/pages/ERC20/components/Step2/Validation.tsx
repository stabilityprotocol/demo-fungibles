import { ERC20Props } from "../..";
import { useMemo } from "react";
import {
  tokenNameSchema,
  tokenSymbolSchema,
  amountToMintSchema,
} from "./Schemas";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Validation: React.FC<ERC20Props> = ({
  tokenName,
  tokenSymbol,
  mintAmount,
}) => {
  const { t } = useTranslation();

  const validation = useMemo(() => {
    const tokenNameValid = tokenNameSchema.safeParse(tokenName);
    const tokenSymbolValid = tokenSymbolSchema.safeParse(tokenSymbol);
    const mintAmountValid = amountToMintSchema.safeParse(mintAmount);
    return {
      tokenName: tokenNameValid,
      tokenSymbol: tokenSymbolValid,
      amountToMint: mintAmountValid,
    };
  }, [tokenName, tokenSymbol, mintAmount]);

  const isValid = useMemo(() => {
    return (
      validation.tokenName.success &&
      validation.tokenSymbol.success &&
      validation.amountToMint.success
    );
  }, [validation]);

  return isValid ? null : (
    <ValidationWrapper>
      <div>{t("pages.erc20.step2.validation.title")}</div>
      <ul>
        {Object.keys(validation).map((key) => {
          const valid = validation[key as keyof typeof validation];
          if (valid.success === false) {
            const error = JSON.parse(valid.error.message);
            return (
              <li key={key}>
                {t("pages.erc20.step1." + key)} - {error[0]?.message}.
              </li>
            );
          }
          return null;
        })}
      </ul>
    </ValidationWrapper>
  );
};

const ValidationWrapper = styled.div`
  background: ${(props) => props.theme.colors.red0};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.font.secondary};
  width: 80%;
`;

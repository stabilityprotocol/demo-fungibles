import { ERC1155Props } from "../..";
import { useMemo } from "react";
import { collectionDescriptionSchema, tokenNameSchema } from "./Schemas";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useWallet } from "../../../../common/hooks/useWallet";

export const Validation: React.FC<ERC1155Props> = ({
  tokenName,
  collectionDescription,
  imageFile,
}) => {
  const { t } = useTranslation();
  const { isWrongNetwork } = useWallet();

  const validation = useMemo(() => {
    const tokenNameValid = tokenNameSchema.safeParse(tokenName);
    const collectionDescriptionValid = collectionDescriptionSchema.safeParse(
      collectionDescription
    );
    return {
      tokenName: tokenNameValid,
      collectionDescription: collectionDescriptionValid,
    };
  }, [collectionDescription, tokenName]);

  const isValid = useMemo(() => {
    return (
      validation.tokenName.success &&
      validation.collectionDescription.success &&
      imageFile !== undefined &&
      !isWrongNetwork
    );
  }, [
    validation.tokenName.success,
    validation.collectionDescription.success,
    imageFile,
    isWrongNetwork,
  ]);

  return isValid ? null : (
    <ValidationWrapper>
      <div>{t("pages.erc1155.step2.validation.title")}</div>
      <ul>
        {Object.keys(validation).map((key) => {
          const valid = validation[key as keyof typeof validation];
          if (valid.success === false) {
            const error = JSON.parse(valid.error.message);
            return (
              <li key={key}>
                {t("pages.erc1155.step1." + key)} - {error[0]?.message}.
              </li>
            );
          }
          return null;
        })}
        {isWrongNetwork && (
          <li>{t("pages.erc1155.step2.validation.wrongNetwork")}</li>
        )}
        {imageFile === undefined && (
          <li>{t("pages.erc1155.step2.validation.noImage")}</li>
        )}
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

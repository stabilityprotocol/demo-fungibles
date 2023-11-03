import { useMemo, useState } from "react";
import { ERC20Wrapper } from "./Styles";
import { Step1 } from "./components/Step1";
import React from "react";
import { StepProgress } from "../../components/StepProgress";
import { Step3 } from "./components/Step3";
import { useTranslation } from "react-i18next";
import { Step2 } from "./components/Step2";
import { Address } from "viem";
import { TNftState } from "../../common/State/NFT";

export type ERC1155Props = {
  tokenName: string;
  imageFile: File | undefined;
  tokenMetadata?: ERC1155Metadata;
  setTokenName: (tokenName: string) => void;
  setTokenMetadata: (metadata: ERC1155Metadata | undefined) => void;
  setImageFile: (file: File | undefined) => void;
  setStep: (step: number) => void;
};

export type ERC1155Metadata = {
  address: Address;
  blocknumber: bigint;
  transactionHash: Address;
  ipfsData: TNftState[string];
};

const steps: { [key: number]: React.FC<ERC1155Props> } = {
  1: Step1,
  2: Step2,
  3: Step3,
};

export const ERC1155 = () => {
  const [tokenName, setTokenName] = useState<string>("");
  const [tokenMetadata, setTokenMetadata] = useState<
    ERC1155Metadata | undefined
  >();
  const [step, setStep] = useState<number>(1);
  const [imageFile, setImageFile] = useState<File | undefined>();
  const { t } = useTranslation();

  const props: ERC1155Props = {
    tokenName,
    tokenMetadata,
    imageFile,
    setTokenName,
    setImageFile,
    setTokenMetadata,
    setStep,
  };

  const Component = useMemo(() => {
    return steps[step] || (() => <div>{t("pages.erc20.invalidStep")}</div>);
  }, [step, t]);

  return (
    <ERC20Wrapper>
      <StepProgress steps={Object.keys(steps).length} currentStep={step} />
      <Component {...{ ...props }} />
    </ERC20Wrapper>
  );
};

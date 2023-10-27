import { useMemo, useState } from "react";
import { ERC20Wrapper } from "./Styles";
import { Step1 } from "./components/Step1";
import React from "react";
import { StepProgress } from "../../components/StepProgress";
import { Step3 } from "./components/Step3";
import { useTranslation } from "react-i18next";
import { Step2 } from "./components/Step2";
import { Address } from "viem";

export type ERC20Props = {
  tokenName: string;
  setTokenName: (tokenName: string) => void;
  tokenSymbol: string;
  setTokenSymbol: (tokenSymbol: string) => void;
  mintAmount: string;
  setMintAmount: (mintAmount: string) => void;
  setStep: (step: number) => void;
  tokenMetadata?: ERC20Metadata;
  setTokenMetadata: (metadata: ERC20Metadata) => void;
};

export type ERC20Metadata = {
  address: Address;
  blocknumber: bigint;
  transactionHash: Address;
};

const steps: { [key: number]: React.FC<ERC20Props> } = {
  1: Step1,
  2: Step2,
  3: Step3,
};

export const ERC20 = () => {
  const [tokenName, setTokenName] = useState<string>("");
  const [tokenSymbol, setTokenSymbol] = useState<string>("");
  const [mintAmount, setMintAmount] = useState<string>("");
  const [tokenMetadata, setTokenMetadata] = useState<
    ERC20Metadata | undefined
  >();
  const [step, setStep] = useState<number>(1);
  const { t } = useTranslation();

  const props: ERC20Props = {
    tokenName,
    setTokenName,
    tokenSymbol,
    setTokenSymbol,
    mintAmount,
    setMintAmount,
    setStep,
    tokenMetadata,
    setTokenMetadata,
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

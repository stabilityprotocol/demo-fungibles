import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { ERC1155Props } from "../..";
import { ButtonSmallAction } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import {
  Step1ActionsWrapper,
  Step1DropZoneText,
  Step1DropzoneWrapper,
  Step1InputWrapper,
  Step1InputsWrapper,
  Step1Wrapper,
} from "./Styles";
import { StepHeader } from "../../Styles";
import { useTranslation } from "react-i18next";
import { PiDiamondsFourFill } from "react-icons/pi";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlinePicture } from "react-icons/ai";

export const Step1: React.FC<ERC1155Props> = (props) => {
  const { tokenName, imageFile, setStep, setTokenName, setImageFile } = props;
  const { t } = useTranslation();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setImageFile(acceptedFiles[0]); // we only accept 1 file
    },
    [setImageFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    onDrop,
  });

  return (
    <Step1Wrapper>
      <StepHeader>{t("pages.erc1155.step1.title")}</StepHeader>
      <Step1InputsWrapper>
        <Step1DropzoneWrapper {...getRootProps()}>
          <input {...getInputProps()} />
          {imageFile ? (
            <div>
              <img
                src={URL.createObjectURL(imageFile)}
                alt="preview"
                width={"100%"}
                height={"auto"}
              />
              <div key={imageFile.name}>
                {imageFile.name} - {imageFile.size} bytes
              </div>
            </div>
          ) : (
            <Step1DropZoneText>
              <div>
                <AiOutlinePicture />
              </div>
              <div>{t("pages.erc1155.step1.dropzoneDescription")}</div>
            </Step1DropZoneText>
          )}
        </Step1DropzoneWrapper>
        <Step1InputWrapper>
          <Input
            icon={<PiDiamondsFourFill />}
            value={tokenName}
            placeholder={t("pages.erc1155.step1.tokenName")}
            onChange={(e) => setTokenName(e)}
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

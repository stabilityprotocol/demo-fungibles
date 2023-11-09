import {
  HeaderActionsWrapper,
  HeaderLogoWrapper,
  HeaderWrapper,
} from "./Styles";
import logoBlack from "../../assets/stability-mintify.svg";
import { ButtonSmallNoFill } from "../Button";
import { Link } from "react-router-dom";
import { IoDocumentSharp } from "react-icons/io5";
import { useAccount } from "wagmi";
import { ConnectionModal } from "../ConnectionModal";
import { useTranslation } from "react-i18next";
import { Web3Controls } from "./Web3Controls";

export const Header = () => {
  const { isConnected } = useAccount();
  const { t } = useTranslation();

  return (
    <>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          <Link to="/">
            <img src={logoBlack} alt="logo" />
          </Link>
        </HeaderLogoWrapper>
        <HeaderActionsWrapper>
          {/* <ButtonSmallAction>
            {t("components.header.upgrade")} <BiSolidPlaneTakeOff />
          </ButtonSmallAction> */}
          <ButtonSmallNoFill onClick={() => window.open(t("links.docs"))}>
            {t("components.header.docs")}
            <IoDocumentSharp />
          </ButtonSmallNoFill>
          <Web3Controls />
        </HeaderActionsWrapper>
      </HeaderWrapper>
      <ConnectionModal isOpen={!isConnected} />
    </>
  );
};

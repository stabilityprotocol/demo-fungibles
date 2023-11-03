import Modal from "react-modal";
import { useConfig, useConnect } from "wagmi";
import {
  ConnectionModalTitle,
  ConnectionModalTitleWrapper,
  ConnectionOptionsWrapper,
} from "./Styles";
import { ButtonSmallAction } from "../Button";
import { useTranslation } from "react-i18next";
import metamask2 from "../../assets/metamask.svg";
import magiclink from "../../assets/magiclink.svg";
import { usePortableDevice } from "../../common/hooks/usePortableDevice";
import { Theme } from "../../common/Theme";
import { universalWallet } from "../../common/Blockchain";
import { HiOutlineMail } from "react-icons/hi";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0",
    maxWidth: "500px",
    zIndex: 9999,
    padding: Theme.spacing.medium,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 9998,
  },
};

export const ConnectionModal: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { connectors } = useConfig();
  const { connect } = useConnect({
    connector: connectors[0],
  });
  const { connect: connectMagicLink } = useConnect({
    connector: universalWallet,
  });
  const { isPortable } = usePortableDevice();
  const { t } = useTranslation();

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      style={{
        ...modalStyles,
        content: {
          ...modalStyles.content,
          maxWidth: isPortable ? "95vw" : "500px",
        },
      }}
      contentLabel="Connection modal"
    >
      <ConnectionModalTitleWrapper>
        <ConnectionModalTitle>
          {t("components.connectionModal.title")}
        </ConnectionModalTitle>
        <ConnectionOptionsWrapper>
          <ButtonSmallAction onClick={() => connectMagicLink()}>
            {t("components.connectionModal.newUser")} <HiOutlineMail />
          </ButtonSmallAction>
          <ButtonSmallAction onClick={() => connectMagicLink()}>
            {t("components.connectionModal.magiclink")}
            <img src={magiclink} alt="MagicLink" />
          </ButtonSmallAction>
          <ButtonSmallAction onClick={() => connect()}>
            {t("components.connectionModal.metamask")}{" "}
            <img src={metamask2} alt="Metamask" />
          </ButtonSmallAction>
        </ConnectionOptionsWrapper>
      </ConnectionModalTitleWrapper>
    </Modal>
  );
};

import { FooterContainer, FooterRight } from "./Styles";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import Metamask from "../../assets/metamask.png";
import { useTranslation } from "react-i18next";
import { useAddNetwork } from "../../common/Blockchain/useAddNetwork";

export const Footer = () => {
  const { t } = useTranslation();
  const { addNetwork } = useAddNetwork();

  return (
    <FooterContainer>
      <span>{t("components.footer.copyright")}</span>
      <FooterRight>
        <span>
          <a href={t("links.contactForm")} target="_blank" rel="noreferrer">
            {t("components.footer.contactUs")}
          </a>
        </span>
        <span>
          {t("components.footer.followUs")}
          <a href={t("links.x")} target="_blank" rel="noreferrer">
            <RiTwitterXLine />
          </a>
          <a href={t("links.linkedin")} target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </span>
        <span onClick={() => addNetwork()}>
          <img src={Metamask} alt="Metamask" />{" "}
          {t("components.footer.addStability")}
        </span>
      </FooterRight>
    </FooterContainer>
  );
};

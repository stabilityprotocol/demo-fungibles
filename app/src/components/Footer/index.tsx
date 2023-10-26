import { FooterContainer, FooterRight } from "./Styles";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

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
      </FooterRight>
    </FooterContainer>
  );
};

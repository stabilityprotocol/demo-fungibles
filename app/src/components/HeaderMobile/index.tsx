import { HeaderMobileWrapper } from "./Styles";
import LogoBlack from "../../assets/stability-black.svg";
import LogoWhite from "../../assets/stability-white.svg";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HamburgerMenu } from "../HamburgerMenu";

export const HeaderMobile: React.FC<{
  whiteBg?: boolean;
  children?: React.ReactNode;
}> = ({ whiteBg, children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderMobileWrapper {...{ whiteBg }}>
        <img src={whiteBg ? LogoBlack : LogoWhite} alt="Stability" />
        <AiOutlineMenu onClick={() => setMenuOpen(true)} />
      </HeaderMobileWrapper>
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        {children}
      </HamburgerMenu>
    </>
  );
};

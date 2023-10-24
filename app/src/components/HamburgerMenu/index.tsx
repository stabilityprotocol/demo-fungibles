import { useRef, useCallback } from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
  HamburgerMenuBody,
  HamburgerMenuClose,
  HamburgerMenuContent,
  HamburgerMenuWrapper,
} from "./Styles";
import { Footer } from "../Footer";
import { AiOutlineClose } from "react-icons/ai";

export const HamburgerMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useOnClickOutside(ref, handleClose);

  return (
    <HamburgerMenuWrapper {...{ isOpen, ref }}>
      <HamburgerMenuBody>
        <HamburgerMenuClose>
          <span onClick={handleClose}>
            <AiOutlineClose />
          </span>
        </HamburgerMenuClose>
        <HamburgerMenuContent>{children}</HamburgerMenuContent>
      </HamburgerMenuBody>
      <Footer />
    </HamburgerMenuWrapper>
  );
};

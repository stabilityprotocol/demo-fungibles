import { Outlet, useNavigate } from "react-router-dom";
import {
  NavigationToggleWrapper,
  OutletWrapper,
  PortalRootWrapper,
} from "./Styles";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderMobile } from "../HeaderMobile";
import { usePortableDevice } from "../../common/hooks/usePortableDevice";
import { Toggle } from "../Toggle";
import { useCallback } from "react";

const toggleOptions = ["Create NFT", "Create Token"] as const;

export const PortalRoot = () => {
  const { isPortable } = usePortableDevice();
  const navigate = useNavigate();

  const onChangeTab = useCallback(
    (option: React.ReactNode) => {
      const opt = option as (typeof toggleOptions)[number];
      navigate(opt === "Create NFT" ? "/erc1155" : "/erc20");
    },
    [navigate]
  );

  return (
    <PortalRootWrapper>
      {isPortable ? (
        <HeaderMobile whiteBg>
          <Header />
        </HeaderMobile>
      ) : (
        <Header />
      )}
      <OutletWrapper>
        <NavigationToggleWrapper>
          <Toggle options={toggleOptions} onSelection={onChangeTab} />
        </NavigationToggleWrapper>
        <Outlet />
      </OutletWrapper>
      {!isPortable && <Footer />}
    </PortalRootWrapper>
  );
};

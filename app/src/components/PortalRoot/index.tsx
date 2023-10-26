import { Outlet } from "react-router-dom";
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

export const PortalRoot = () => {
  const { isPortable } = usePortableDevice();

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
          <Toggle options={["Create NFT", "Create Token"]} />
        </NavigationToggleWrapper>
        <Outlet />
      </OutletWrapper>
      {!isPortable && <Footer />}
    </PortalRootWrapper>
  );
};

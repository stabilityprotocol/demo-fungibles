import { Outlet } from "react-router-dom";
import { OutletWrapper, PortalRootWrapper } from "./Styles";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderMobile } from "../HeaderMobile";
import { usePortableDevice } from "../../common/hooks/usePortableDevice";

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
        <Outlet />
      </OutletWrapper>
      {!isPortable && <Footer />}
    </PortalRootWrapper>
  );
};

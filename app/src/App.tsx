import "./common/i18n";
import { ThemeProvider } from "styled-components";
import { Theme } from "./common/Theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PortalRoot } from "./components/PortalRoot";
import { WagmiConfig } from "wagmi";
import { config } from "./common/Blockchain";
import { ERC20 } from "./pages/ERC20";
import { ERC1155 } from "./pages/ERC1155";
import { RecoilRoot } from "recoil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortalRoot />,
    children: [
      {
        path: "/",
        element: <ERC1155 />,
      },
      {
        path: "/erc20",
        element: <ERC20 />,
      },
      {
        path: "/erc1155",
        element: <ERC1155 />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <WagmiConfig config={config}>
          <ThemeProvider theme={Theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </WagmiConfig>
      </RecoilRoot>
    </>
  );
}

export default App;

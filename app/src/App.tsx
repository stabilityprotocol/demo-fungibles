import "./common/i18n";
import { ThemeProvider } from "styled-components";
import { Theme } from "./common/Theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PortalRoot } from "./components/PortalRoot";
import { WagmiConfig } from "wagmi";
import { config } from "./common/Blockchain";
import { ERC20 } from "./pages/ERC20";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortalRoot />,
    children: [
      {
        path: "/",
        element: <ERC20 />,
      },
      {
        path: "/erc20",
        element: <ERC20 />,
      },
      {
        path: "/nft",
        element: <ERC20 />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <WagmiConfig config={config}>
        <ThemeProvider theme={Theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </WagmiConfig>
    </>
  );
}

export default App;

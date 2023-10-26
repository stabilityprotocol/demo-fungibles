import { useTranslation } from "react-i18next";
import { useAccount, useDisconnect } from "wagmi";
import { shortAddress } from "../../common/ETH";
import { Selector } from "../Selector";
import { NetworkOptionWrapper } from "./Styles";
import cube from "../../assets/cube.svg";
import { SlLogout } from "react-icons/sl";
import { useMemo } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { AiOutlineCopy } from "react-icons/ai";

const TestnetCube = () => {
  return (
    <img
      src={cube}
      alt="cube"
      style={{
        height: "1.5rem",
        filter: "hue-rotate(90deg)",
        marginRight: "0.5rem",
        marginLeft: "0",
      }}
    />
  );
};

// const MainnetCube = () => {
//   return (
//     <img
//       src={cube}
//       alt="cube"
//       style={{
//         height: "1.5rem",
//         marginRight: "0.5rem",
//         marginLeft: "0",
//       }}
//     />
//   );
// };

export const Web3Controls = () => {
  const { address } = useAccount();
  const { t } = useTranslation();
  const { disconnect } = useDisconnect();
  const [, copyFn] = useCopyToClipboard();

  const Comp = useMemo(
    () => () => {
      if (!address) return null;
      return (
        <>
          <Selector
            onSelected={() => {}}
            options={[
              {
                label: (
                  <NetworkOptionWrapper>
                    <TestnetCube />
                    {t("components.header.networks.testnet")}
                  </NetworkOptionWrapper>
                ),
                value: "testnet",
              },
              // {
              //   label: (
              //     <NetworkOptionWrapper>
              //       <MainnetCube />
              //       {t("components.header.networks.mainnet")}
              //     </NetworkOptionWrapper>
              //   ),
              //   value: "mainnet",
              // },
            ]}
          />
          <Selector
            options={[
              {
                label: (
                  <NetworkOptionWrapper onClick={() => copyFn(address ?? "")}>
                    <AiOutlineCopy />
                    {t("components.header.web3.copyAddress")}
                  </NetworkOptionWrapper>
                ),
                value: "copy",
              },
              {
                label: (
                  <NetworkOptionWrapper onClick={() => disconnect()}>
                    <SlLogout />
                    {t("components.header.web3.logOut")}
                  </NetworkOptionWrapper>
                ),
                value: "disconnect",
              },
            ]}
            selected={{
              label: shortAddress(address),
              value: address,
            }}
            onSelected={() => {}}
          />
        </>
      );
    },
    [address, copyFn, disconnect, t]
  );

  return <Comp />;
};

import { useTranslation } from "react-i18next";
import { useAccount, useDisconnect } from "wagmi";
import { shortAddress } from "../../common/ETH";
import { Selector } from "../Selector";
import { NetworkOptionWrapper } from "./Styles";
import cube from "../../assets/cube.svg";
import { SlLogout } from "react-icons/sl";
import { useMemo } from "react";

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
                  <NetworkOptionWrapper>
                    <SlLogout />
                    Log Out
                  </NetworkOptionWrapper>
                ),
                value: "disconnect",
              },
            ]}
            selected={{
              label: shortAddress(address),
              value: address,
            }}
            onSelected={() => disconnect()}
          />
        </>
      );
    },
    [address, disconnect, t]
  );

  return <Comp />;
};

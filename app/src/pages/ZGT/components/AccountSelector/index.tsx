import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Selector } from "../../../../components/Selector";

export const AccountSelector = () => {
  const { t } = useTranslation();

  return (
    <AccountSelectorWrapper>
      <AccountSelectorLabel>
        {t("pages.zgt.accountSelector.label")}
      </AccountSelectorLabel>
      <AccountSelectorControl>
        <Selector
          options={[
            {
              label: t("pages.zgt.accountSelector.free"),
              value: "free",
            },
          ]}
          onSelected={() => {}}
        />
      </AccountSelectorControl>
    </AccountSelectorWrapper>
  );
};

const AccountSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AccountSelectorLabel = styled.span`
  font-size: 1.2rem;
`;

const AccountSelectorControl = styled.div`
  margin-left: 1rem;
  width: 100%;
`;

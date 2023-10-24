import styled from "styled-components";
import { mediaSizes } from "../../../../common/Theme";

export const StatsWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49%;
  background: ${(props) => props.theme.colors.blue1};
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.box.borderRadius};

  @media ${mediaSizes.portableQuery} {
    width: 100%;
  }
`;

export const StatDetails = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatIcon = styled.span`
  border-radius: ${(props) => props.theme.box.borderRadius};
  background: ${(props) => props.theme.colors.blue0};
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${(props) => props.theme.spacing.small};

  > svg {
    color: #000;
    width: 2rem;
    height: auto;
  }
`;

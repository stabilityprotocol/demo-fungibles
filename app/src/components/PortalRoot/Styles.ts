import styled from "styled-components";
import heroBg from "../../assets/hero.png";
import { mediaSizes } from "../../common/Theme";

export const PortalRootWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${heroBg}) no-repeat fixed center;
  background-size: cover;

  @media ${mediaSizes.portableQuery} {
    background-size: 100vw 100vh;
    align-items: center;
  }
`;

export const NavigationToggleWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.medium} 0;
`;

export const OutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.xlarge};

  @media ${mediaSizes.portableQuery} {
    padding: ${(props) => props.theme.spacing.medium}
      ${(props) => props.theme.spacing.xsmall};
  }
`;

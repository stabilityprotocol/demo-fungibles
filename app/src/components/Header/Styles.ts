import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const HeaderWrapper = styled.div`
  padding: ${(props) => props.theme.spacing.medium}
    ${(props) => props.theme.spacing.xlarge};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mediaSizes.portableQuery} {
    background: transparent;
    border-bottom: none;
    padding: 0;
    font-size: 1.2rem;
  }
`;

export const HeaderLogoWrapper = styled.span`
  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: auto;
      height: 1.75rem;
    }
  }

  @media ${mediaSizes.portableQuery} {
    display: none;
  }
`;

export const HeaderActionsWrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 1rem;
  }

  @media ${mediaSizes.portableQuery} {
    flex-direction: column-reverse;
    width: 100%;

    .selector__selected {
      background: #fff;
    }

    > button {
      font-size: 1.5rem;
      color: #000;

      > svg {
        color: #000;
      }
    }

    > * {
      margin: ${(props) => props.theme.spacing.medium} 0;
    }
  }
`;

export const NetworkOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.xsmall};

  > svg,
  > img {
    margin-right: ${(props) => props.theme.spacing.small};
  }
`;

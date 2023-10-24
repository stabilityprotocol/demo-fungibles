import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const ConnectionModalTitleWrapper = styled.div``;

export const ConnectionModalTitle = styled.h1`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

export const ConnectionOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    margin: ${(props) => props.theme.spacing.xsmall};
    font-family: ${(props) => props.theme.font.primary};
    font-weight: 800;

    svg,
    img {
      height: 1.2rem;
      width: auto;
      margin-left: ${(props) => props.theme.spacing.xsmall};
    }
  }

  @media ${mediaSizes.portableQuery} {
    > button {
      font-size: 1.2rem;
      margin: ${(props) => props.theme.spacing.small} 0;
      padding: ${(props) => props.theme.spacing.medium};
    }
  }
`;

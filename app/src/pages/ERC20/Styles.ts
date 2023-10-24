import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const ERC20Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.blue0};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  min-width: 50rem;
  max-width: 60rem;
  background: #fff;

  @media ${mediaSizes.portableQuery} {
    width: 90vw;
    max-width: 90vw;
    min-width: 90vw;
  }
`;

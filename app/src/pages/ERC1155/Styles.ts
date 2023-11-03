import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const ERC20Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.blue0};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  background: #fff;
  min-width: 30rem;
  max-width: 30rem;

  @media ${mediaSizes.portableQuery} {
    width: 90vw;
    max-width: 90vw;
    min-width: 90vw;
  }
`;

export const StepHeader = styled.div`
  font-size: 1.75rem;
  margin: ${(props) => props.theme.spacing.medium} 0;
`;

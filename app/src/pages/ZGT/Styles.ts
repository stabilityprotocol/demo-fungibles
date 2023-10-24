import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const ZgtWrapper = styled.div`
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

export const ZgtStatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.theme.spacing.medium} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral};

  > span {
    margin: ${(props) => props.theme.spacing.small} 0;
  }

  @media ${mediaSizes.portableQuery} {
    flex-direction: column;
  }
`;

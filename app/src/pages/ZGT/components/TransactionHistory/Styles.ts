import styled from "styled-components";
import { mediaSizes } from "../../../../common/Theme";

export const TransactionHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionHistoryTitle = styled.div`
  font-size: 1.2rem;
`;

export const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.medium} 0;
`;

export const TransactionItemWrapper = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.xsmall} 0;

  a {
    color: ${(props) => props.theme.colors.blueLink};
    text-decoration: none;
    display: flex;
    align-items: center;
    word-break: break-all;

    > svg {
      margin-left: ${(props) => props.theme.spacing.small};
    }
  }

  @media ${mediaSizes.portableQuery} {
    flex-direction: column;
  }
`;

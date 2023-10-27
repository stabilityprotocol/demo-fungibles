import styled from "styled-components";

export const Step2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Step2InputWrapper = styled.div`
  width: 80%;
  margin: ${(props) => props.theme.spacing.xsmall} 0;
`;

export const Step2ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.medium};

  > button {
    margin: 0 ${(props) => props.theme.spacing.xsmall};
    width: 30%;
  }

  > div.loading {
    > button {
      cursor: not-allowed;
      width: 100%;

      > span {
        margin-left: ${(props) => props.theme.spacing.small};
      }
    }
  }
`;

export const Step2InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium} 0;
`;

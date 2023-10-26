import styled from "styled-components";

export const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Step1InputWrapper = styled.div`
  width: 80%;
  margin: ${(props) => props.theme.spacing.xsmall} 0;
`;

export const Step1ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.medium};

  > button {
    width: 70%;
  }
`;

export const Step1InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.medium} 0;
`;

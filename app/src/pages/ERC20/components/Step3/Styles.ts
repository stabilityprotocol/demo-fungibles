import styled from "styled-components";

export const Step3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Step3ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.medium};

  > button {
    width: 70%;
  }
`;

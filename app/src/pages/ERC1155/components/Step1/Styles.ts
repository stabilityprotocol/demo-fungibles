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

export const Step1DropzoneWrapper = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  padding: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.box.borderRadius};
  background-color: ${(props) => props.theme.colors.neutral};
  border: 1px solid ${(props) => props.theme.colors.neutralDark};
  text-align: center;
  cursor: pointer;
  width: 80%;
`;

export const Step1DropZoneText = styled.div`
  svg {
    margin-bottom: ${(props) => props.theme.spacing.small};
    height: 2rem;
    width: auto;
  }
`;

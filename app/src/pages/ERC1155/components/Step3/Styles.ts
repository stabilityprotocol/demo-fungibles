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
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.medium};

  > button {
    margin: ${(props) => props.theme.spacing.xsmall} 0;
    width: 70%;
  }
`;

export const Step3DeploymentInfoWrapper = styled.div`
  background: ${(props) => props.theme.colors.neutral};
  border-radius: ${(props) => props.theme.box.borderRadius};
  padding: ${(props) => props.theme.spacing.medium};
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.font.secondary};
  width: 80%;

  a {
    color: #000;
  }
`;

export const Step3NftPreview = styled.div`
  max-width: 80%;
  margin-bottom: ${(props) => props.theme.spacing.medium};

  img {
    border-radius: ${(props) => props.theme.box.borderRadius};
    width: 100%;
    height: auto;
  }
`;

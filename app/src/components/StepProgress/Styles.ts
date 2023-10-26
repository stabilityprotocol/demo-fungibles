import styled, { css } from "styled-components";

export const StepsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StepWrapper = styled.div<{
  steps: number;
  step: number;
  isCurrentStep: boolean;
  currentStep: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepConnector = styled.span<{
  isCurrentStep: boolean;
  step: number;
  steps: number;
  currentStep: number;
}>`
  border: 1px solid ${(props) => props.theme.colors.neutralDark};
  width: 5rem;
  height: 1px;
`;

export const StepLeft = styled(StepConnector)`
  ${(props) =>
    props.step <= props.currentStep &&
    css`
      border: 1px solid #000;
    `}
`;

export const StepRight = styled(StepConnector)`
  ${(props) =>
    props.step <= props.currentStep &&
    css`
      border: 1px solid #000;
    `}
`;

export const StepCircle = styled.div<{
  isCurrentStep: boolean;
  step: number;
  steps: number;
  currentStep: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.neutralDark};
  border: 1px solid ${(props) => props.theme.colors.neutral};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.neutral};
  font-size: 1.25rem;

  ${(props) =>
    props.step <= props.currentStep &&
    css`
      background: #000;
    `}
`;

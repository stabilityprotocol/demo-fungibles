import {
  StepCircle,
  StepLeft,
  StepRight,
  StepWrapper,
  StepsWrapper,
} from "./Styles";

export const StepProgress: React.FC<{ steps: number; currentStep: number }> = ({
  steps,
  currentStep,
}) => {
  return (
    <StepsWrapper>
      {[...Array(steps)].map((i, idx) => {
        const actualStep = idx + 1;
        const isCurrentStep = actualStep === currentStep;
        return (
          <StepWrapper
            isCurrentStep={isCurrentStep}
            key={i}
            step={i}
            steps={steps}
            currentStep={currentStep}
          >
            {actualStep > 1 && (
              <StepLeft
                {...{
                  isCurrentStep,
                  step: actualStep,
                  steps,
                  currentStep: currentStep,
                }}
              />
            )}
            <StepCircle
              {...{
                isCurrentStep,
                step: actualStep,
                steps,
                currentStep: currentStep,
              }}
            />
            {actualStep < steps && (
              <StepRight
                {...{
                  isCurrentStep,
                  step: actualStep,
                  steps,
                  currentStep: currentStep,
                }}
              />
            )}
          </StepWrapper>
        );
      })}
    </StepsWrapper>
  );
};

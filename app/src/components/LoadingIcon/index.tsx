import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

export const LoadingIcon = () => {
  return (
    <LoadingIconWrapper>
      <AiOutlineLoading3Quarters />
    </LoadingIconWrapper>
  );
};

const animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingIconWrapper = styled.span`
  > svg {
    animation: ${animation} 1s linear infinite;
  }
`;

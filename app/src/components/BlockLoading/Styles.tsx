import styled, { keyframes } from "styled-components";

const animatedBackground = keyframes`
    0% {
        background-position: -800px 0;
    }
    100% {
        background-position: 800px 0;
    }
`;

export const BlockLoadingWrapper = styled.div<{
  height?: string;
  width?: string;
}>`
  animation-name: ${animatedBackground};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2) 8%,
    rgba(0, 0, 0, 0.4) 18%,
    rgba(0, 0, 0, 0.2) 33%
  );
  background-size: 800px 104px;
  height: ${(props) => props.height ?? "2rem"};
  width: ${(props) => props.width ?? "100%"};
  border-radius: ${(props) => props.theme.box.borderRadius};
  position: relative;
`;

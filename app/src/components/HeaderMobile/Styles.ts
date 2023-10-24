import styled from "styled-components";

export const HeaderMobileWrapper = styled.div<{ whiteBg?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  width: 90vw;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.box.borderRadius};
  backdrop-filter: blur(2px);
  background: ${(props) =>
    props.whiteBg ? "rgba(255, 255, 255, 0.8)" : "rgba(63, 63, 63, 0.8)"};
  z-index: 1;
  margin-top: 1rem;

  > svg,
  > img {
    height: 60%;
    width: auto;
  }
`;

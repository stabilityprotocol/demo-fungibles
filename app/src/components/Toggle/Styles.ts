import styled, { css } from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(props) => props.theme.box.borderRadius};
  background: ${(props) => props.theme.colors.bgBlue};
  color: #fff;
`;

export const ToggleOption = styled.div<{ active?: boolean }>`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 0.9rem;
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.box.borderRadius};
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme.colors.primary};
      color: #000;
    `}
`;

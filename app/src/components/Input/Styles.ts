import styled, { css } from "styled-components";

export const InputWrapper = styled.div<{ icon?: boolean }>`
  border-radius: ${(props) => props.theme.box.borderRadius};
  background: ${(props) => props.theme.colors.neutral};
  padding: ${(props) => props.theme.spacing.small}
    ${(props) => props.theme.spacing.small};

  ${(props) =>
    props.icon &&
    css`
      display: flex;
      align-items: center;

      > svg {
        font-size: 1.25rem;
        margin-right: ${(props) => props.theme.spacing.small};
      }
    `}
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
`;

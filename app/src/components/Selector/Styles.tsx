import styled, { css } from "styled-components";

export const SelectorWrapper = styled.div`
  position: relative;
`;

export const SelectorSelected = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.box.borderRadius};
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.colors.neutral};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
  width: 100%;

  ${(props) =>
    props.isOpen &&
    css`
      background-color: ${(props) => props.theme.colors.neutralDark};
      border: 1px solid ${(props) => props.theme.colors.dark0};

      > svg {
        transform: rotate(180deg);
      }
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralDark};
    border: 1px solid ${(props) => props.theme.colors.dark0};
  }

  svg {
    transition: transform 0.2s ease-in-out;
  }
`;

export const SelectorOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: ${(props) => props.theme.spacing.small};
  box-shadow: 4px -4px 10px 0px #0000001a;
  border-radius: ${(props) => props.theme.box.borderRadius};
  background-color: #fff;
  list-style-type: none;
  padding: 0;
`;

export const SelectorOption = styled.li`
  padding: ${(props) => props.theme.spacing.small};
  border-radius: ${(props) => props.theme.box.borderRadius};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.buttons.primary};
  }
`;

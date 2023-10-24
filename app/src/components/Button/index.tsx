import React from "react";
import styled, { css } from "styled-components";

export const Button: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export const ButtonAction: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return <StyledButtonAction onClick={onClick}>{children}</StyledButtonAction>;
};

export const ButtonNoFilled: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <StyledButton noFill onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export const ButtonSmall: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return <StyledButtonSmall onClick={onClick}>{children}</StyledButtonSmall>;
};

export const ButtonSmallAction: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <StyledButtonSmallAction onClick={onClick}>
      {children}
    </StyledButtonSmallAction>
  );
};

export const ButtonSmallNoFill: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <StyledButtonSmall noFill onClick={onClick}>
      {children}
    </StyledButtonSmall>
  );
};

const StyledButton = styled.button<{ noFill?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.medium}
    ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.font.primary};
  font-size: 1.2rem;
  font-weight: 800;
  outline: 0;
  border-radius: ${(props) => props.theme.box.borderRadius};
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

  ${(props) =>
    props.noFill
      ? css`
          background: none;
          border: 0;
        `
      : css`
          background: ${(props) => props.theme.colors.dark0};
          border: 1px solid ${(props) => props.theme.colors.dark1};

          &:hover {
            background: ${(props) => props.theme.colors.dark1};
          }
        `}

  > svg {
    margin-left: ${(props) => props.theme.spacing.small};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledButtonAction = styled(StyledButton)`
  background: ${(props) => props.theme.colors.buttons.primary};
  color: ${(props) => props.theme.colors.bgBlue};

  &:hover {
    background: ${(props) => props.theme.colors.buttons.primaryHover};
  }

  > svg {
    color: ${(props) => props.theme.colors.bgBlue};
  }
`;

const StyledButtonSmall = styled(StyledButton)`
  border: 0;
  padding: ${(props) => props.theme.spacing.small};
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  font-family: ${(props) => props.theme.font.secondary};

  ${(props) =>
    props.noFill
      ? css`
          background: none;
          border: 0;
        `
      : css`
          background: ${(props) => props.theme.colors.buttons.gray};
          border: 1px solid transparent;

          &:hover {
            background: ${(props) => props.theme.colors.buttons.grayHover};
            border: 1px solid ${(props) => props.theme.colors.bgBlue};
          }
        `}

  > svg, img {
    margin-left: ${(props) => props.theme.spacing.small};
    width: auto;
    height: 1.2rem;
    color: #000;
  }
`;

const StyledButtonSmallAction = styled(StyledButtonSmall)`
  background: ${(props) => props.theme.colors.buttons.primary};
  color: ${(props) => props.theme.colors.bgBlue};

  &:hover {
    background: ${(props) => props.theme.colors.buttons.primaryHover};
    border: 1px solid transparent;
  }

  > svg {
    color: ${(props) => props.theme.colors.bgBlue};
  }
`;

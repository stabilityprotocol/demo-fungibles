import styled from "styled-components";
import { mediaSizes } from "../../common/Theme";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 100vw;
  max-width: 100vw;
  padding: 0.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #fff;
  border-top: 1px solid #fff;
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 0.75rem;

  > span {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media ${mediaSizes.portableQuery} {
    font-size: 1rem;
    flex-direction: column-reverse;
    width: 100%;
    min-width: auto;
    max-width: none;
    position: relative;
    background: transparent;
    padding: ${(props) => props.theme.spacing.small};
    border: 0;
    color: #000;

    a {
      color: #000;
    }
  }
`;

export const FooterRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > span {
    cursor: pointer;
    display: flex;
    align-items: end;
    margin-left: 2rem;

    a {
      display: flex;
      align-items: center;
    }

    img,
    svg {
      margin: 0 0.25rem;
      height: auto;
      width: 1.2rem;
    }
  }

  @media ${mediaSizes.portableQuery} {
    font-size: 1.2rem;
    flex-direction: column;
    align-items: flex-start;
    padding: ${(props) => props.theme.spacing.medium} 0;

    > span {
      margin: ${(props) => props.theme.spacing.small} 0;
      align-items: center;
    }
  }
`;

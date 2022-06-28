import styled from "styled-components";
import { mq, slideUp } from "../../styles/styles";

export const ModalBG = styled.section`
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme: { colors } }) => colors.bgAlpha};
  backdrop-filter: blur(3px);
  position: fixed;
  z-index: 3;
`;

export const Product = styled.div`
  width: 90%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.bg};

  animation: ${slideUp} 0.5s ease-out;

  position: relative;

  & > button {
    top: 1rem;
    right: 1rem;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.bgAlpha};

    position: absolute;

    :hover {
      background-color: ${({ theme: { colors } }) => colors.bg};
    }

    svg {
      transform: translateY(15%);
    }
  }

  figure {
    height: 35vh;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    background-color: ${({ theme: { colors } }) => colors.secondary};

    img {
      width: 50%;
      mix-blend-mode: multiply;
    }
  }

  & > div:nth-child(3) {
    padding: 0.8rem;

    h2 {
      margin: 0.5rem 0;

      font-size: 1rem;
    }
    p {
      height: 100px;
      padding: 0.2rem 0;

      overflow: scroll;

      font-weight: 300;
      font-size: 0.9rem;
    }

    div:nth-child(3) {
      padding: 0.8rem 0;

      display: flex;
      gap: 1rem;

      color: ${({ theme: { colors } }) => colors.accent};
    }

    div:nth-child(4) {
      display: flex;
      gap: 1rem;

      button:nth-child(2) {
        width: 20%;
      }
    }
  }

  ${mq[1]} {
    align-items: center;
    flex-direction: row;

    & > div:nth-child(2) {
      width: 50%;

      & > figure {
        height: 60vh;
        width: 100%;
      }
    }

    & > div:nth-child(3) {
      width: 50%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        height: 149px;
        padding: 0.2rem 0;

        overflow: scroll;

        font-weight: 300;
        /* font-size: 0.9rem; */
      }
    }
  }
`;

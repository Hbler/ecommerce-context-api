import styled from "styled-components";
import { mq } from "../../styles/styles";

export const HomeCardNode = styled.article`
  scroll-snap-align: center;

  position: relative;

  figure {
    width: 80vw;
    height: 80vw;
    max-width: 360px;
    max-height: 360px;

    ${mq[1]} {
      width: 45vw;
      height: 45vw;
    }

    ${mq[2]} {
      width: 29vw;
      height: 29vw;
    }

    ${mq[3]} {
      width: 25vw;
      height: 25vw;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border-radius: 4px;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    position: relative;

    img {
      width: 60%;
      height: fit-content;

      cursor: pointer;
      mix-blend-mode: multiply;
    }

    div {
      bottom: 0;
      width: 100%;
      padding: 0.5rem 0.8rem;

      display: flex;
      flex-wrap: wrap;
      column-gap: 0.8rem;

      background-color: ${({ theme: { colors } }) => colors.bgAlpha};
      backdrop-filter: blur(3px);
      position: absolute;

      p {
        width: 100%;
        font-size: 0.8rem;

        cursor: pointer;

        :hover {
          color: ${({ theme: { colors } }) => colors.highlight};
        }
      }

      small {
        svg {
          transform: translateY(10%);
        }
      }

      button {
        right: 0.8rem;
        top: 25%;

        font-size: 1.5rem;
        color: ${({ theme: { colors } }) => colors.text};

        background-color: transparent;
        position: absolute;

        :hover {
          color: ${({ theme: { colors } }) => colors.highlight};
        }
      }
    }
  }
`;

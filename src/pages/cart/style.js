import styled from "styled-components";
import { mq } from "../../styles/styles";

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.secondary};

  .container {
    position: relative;

    .header__btns {
      top: 2.2rem;
      right: 1.1rem;

      display: flex;
      gap: 1rem;

      position: absolute;

      button {
        font-size: 1.5rem;
        color: ${({ theme: { colors } }) => colors.text};

        border: none;
        background-color: transparent;
      }

      .header__btn--home {
        display: none;

        ${mq[1]} {
          display: block;
        }
      }
    }

    & > button {
      ${mq[1]} {
        display: none;
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  position: relative;

  ${mq[2]} {
    min-height: 85vh;
    display: flex;
    align-items: flex-start;
  }
`;

export const Display = styled.section`
  overflow: hidden;

  .container {
    max-height: 55vh;
    padding: 1rem 0.8rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    overflow: scroll;
    scroll-snap-type: both proximity;

    ${mq[1]} {
      max-height: 67vh;
    }

    ${mq[2]} {
      max-height: 80vh;
    }
  }
`;

export const Card = styled.article`
  display: flex;
  justify-content: space-between;

  scroll-snap-align: end;

  figure {
    width: 30vw;
    height: 30vw;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    background-color: ${({ theme: { colors } }) => colors.secondary};

    img {
      width: 50%;
      mix-blend-mode: multiply;
    }
  }

  & > div {
    width: 60%;
    padding: 0.8rem 0;

    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem;

    h2 {
      font-size: 1rem;
    }

    div {
      display: flex;
      gap: 0.5rem;

      input {
        width: 20%;

        text-align: center;
        color: ${({ theme: { colors } }) => colors.text};

        border: none;
        border-radius: 2px;
        background-color: ${({ theme: { colors } }) => colors.secondary};
      }

      button {
        padding: 0 0.3rem;

        color: ${({ theme: { colors } }) => colors.text};

        border: 2px;
        border-radius: 2px;
        background-color: ${({ theme: { colors } }) => colors.secondary};
      }
    }

    p {
      width: 80%;
    }

    & > button {
      width: 20px;
      height: 20px;

      font-size: 1rem;
      color: ${({ theme: { colors } }) => colors.text};

      background-color: transparent;

      :hover {
        color: #990000;
      }

      svg {
        transform: translateY(15%);
      }
    }
  }

  ${mq[1]} {
    justify-content: center;
    gap: 2rem;

    figure {
      width: 15vw;
      height: 15vw;
    }

    & > div {
      h2 {
        font-size: 1.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      div {
        gap: 1rem;
        align-items: center;

        input {
          padding: 0.3rem;
        }

        small {
          font-size: 1rem;
        }
      }

      p {
        width: 90%;
      }
    }
  }

  ${mq[4]} {
    figure {
      width: 7vw;
      height: 7vw;
    }
  }
`;

export const Summary = styled.section`
  bottom: 0;
  width: 100%;

  background-color: ${({ theme: { colors } }) => colors.secondary};
  position: fixed;

  & > button {
    top: 0.5rem;
    right: 0.5rem;
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

  .container {
    h3 {
      text-transform: uppercase;
    }

    p {
      display: flex;
      justify-content: space-between;

      font-weight: 300;

      span {
        font-weight: 500;
      }
    }
  }

  ${mq[2]} {
    width: 40%;
    height: fit-content;

    align-self: center;

    border-radius: 3px 0 0 3px;
    position: relative;
  }
`;

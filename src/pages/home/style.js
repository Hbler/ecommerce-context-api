import styled, { css } from "styled-components";

import { Btn, expand, mq, slideDown } from "../../styles/styles";

export const Nav = styled.nav`
  background-color: ${({ theme: { colors } }) => colors.secondary};

  .container {
    position: relative;

    .nav__btns {
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
        position: relative;
      }
    }

    .nav__filters {
      ${mq[1]} {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;

export const CartBtnNav = styled.button`
  display: none;

  ${mq[1]} {
    display: block;

    :disabled {
      margin: 0;
      color: ${({ theme: { colors } }) => colors.secondary};
      background-color: ${({ theme: { colors } }) => colors.bg};
    }

    ${({ qtty }) => {
      if (qtty > 0)
        return css`
          ::before {
            content: "${({ qtty }) => qtty}";

            top: -10px;
            right: -10px;
            width: 15px;
            height: 15px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 0.6rem;
            color: ${({ theme: { colors } }) => colors.bg};

            border-radius: 50%;
            border: 2px solid;
            border-color: ${({ theme: { colors } }) => colors.secondary};
            background-color: ${({ theme: { colors } }) => colors.accent};
            position: absolute;
          }
        `;
    }}
  }
`;

export const Filters = styled.ul`
  display: none;

  ${mq[1]} {
    width: 65%;
    height: 40px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    li {
      width: 25%;
      padding: 0.3rem 0;

      text-align: center;
      font-size: 0.9rem;

      border-radius: 2px;
      cursor: pointer;

      :hover {
        color: ${({ theme: { colors } }) => colors.bg};
        background-color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
`;

export const MobileFilters = styled.ul`
  right: 0;
  width: 100%;

  padding: 0.5rem 1rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.5rem;

  animation: ${expand} 0.45s ease-in;

  background-color: ${({ theme: { colors } }) => colors.secondary};
  box-shadow: 0 1px 3px -1px #888;
  position: absolute;
  z-index: 2;

  li {
    width: 100%;
    padding: 0 1rem;

    text-align: right;

    animation: ${slideDown} ease-in;

    border-radius: 2px;
    cursor: pointer;

    :hover {
      color: ${({ theme: { colors } }) => colors.bg};
      background-color: ${({ theme: { colors } }) => colors.primary};
    }

    &:nth-child(1) {
      animation-duration: 0.5s;
    }
    &:nth-child(2) {
      animation-duration: 0.6s;
    }
    &:nth-child(3) {
      animation-duration: 0.7s;
    }
    &:nth-child(4) {
      animation-duration: 0.8s;
    }
    &:nth-child(5) {
      animation-duration: 0.9s;
    }
  }
`;

export const MobFilterBtn = styled.button`
  top: 6.2rem;
  right: 0.8rem;

  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.text};

  border: none;
  background-color: transparent;
  position: absolute;

  ${mq[1]} {
    display: none;
  }
`;

export const Search = styled.input`
  width: 80%;
  height: 40px;
  margin: 1rem 0;
  padding: 0 0.8rem;

  color: ${({ theme: { colors } }) => colors.text};

  border: none;
  border-bottom: 2px solid;
  border-radius: 2px 2px 0 0;
  border-color: ${({ theme: { colors } }) => colors.text};
  background-color: ${({ theme: { colors } }) => colors.bg};

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.text};
  }

  ${mq[1]} {
    width: 30%;
  }
`;

export const CartBtn = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  :disabled {
    margin: 0;
    color: ${({ theme: { colors } }) => colors.secondary};
    background-color: ${({ theme: { colors } }) => colors.bg};
  }

  ${mq[1]} {
    display: none;
  }

  ${({ qtty }) => {
    if (qtty > 0)
      return css`
        ::before {
          content: "${({ qtty }) => qtty}";

          top: -10px;
          right: -10px;
          width: 20px;
          height: 20px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 0.8rem;
          color: ${({ theme: { colors } }) => colors.bg};

          border-radius: 50%;
          border: 2px solid;
          border-color: ${({ theme: { colors } }) => colors.secondary};
          background-color: ${({ theme: { colors } }) => colors.accent};
          position: absolute;
        }
      `;
  }}
`;

export const Display = styled.section`
  margin: 1rem 0;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  overflow: scroll;
  scroll-snap-type: both mandatory;
  scroll-snap-points-y: repeat(80vw);

  ${mq[1]} {
    scroll-snap-points-y: repeat(45vw);
  }

  ${mq[2]} {
    max-height: 70vh;

    flex-wrap: wrap;
    justify-content: center;
  }
`;

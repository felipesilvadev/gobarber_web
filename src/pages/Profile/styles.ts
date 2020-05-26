import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MenuProps {
  isVisible: boolean;
}

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176px auto 0;

  width: 100%;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 146px;
    height: 146px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: #ff9000;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0;
    bottom: 0;

    transition: background-color 0.2s;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  background: #ff9000;
  padding: 8px;
  width: 140px;
  border-radius: 4px;

  position: absolute;
  bottom: -70px;
  left: 0;
  transform: translateX(70%);
  opacity: 1;

  ${({ isVisible }) =>
    isVisible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}

  label {
    font-size: 14px;
    font-weight: 500;
    color: #312e38;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.7, '#312e38')};
    }
  }

  label + label {
    margin-top: 8px;
  }

  &::before {
    content: '';
    border-style: solid;
    border-color: #ff9000 transparent;
    border-width: 0 6px 6px 6px;
    bottom: 100%;
    position: absolute;
    left: 0;
    transform: translateX(150%);
  }

  input {
    display: none;
  }
`;

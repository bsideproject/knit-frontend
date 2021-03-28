import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  width: 100%;

  &.ready {
    .skeleton {
      display: none;
    }
    .signin_button {
      display: unset;
    }
  }

  .skeleton {
    height: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 50px;
  }
  .signin_button {
    display: none;
    width: 100%;

    .abcRioButton {
      display: none;
    }

    & > .custom_button {
      position: relative;
      padding: 0;
      width: 100%;
      height: 50px;

      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 50px;
      box-sizing: border-box;
      outline: none;

      ${font.set(16, 'bold')}
      text-align: center;

      cursor: pointer;

      transition: 0.15s ease-out;

      &:hover {
        box-shadow: 0 0 4px #dcdcdc;
      }

      & > .logo_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0;
        left: 0;

        width: 60px;
        height: 100%;

        &::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url('/assets/google_logo.png');
          background-size: 20px 20px;
          background-repeat: no-repeat;
        }
      }
    }
  }
`;

import { FC, useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { initNaverSigninSDK } from '~/utils/auth';
import * as font from '~/styles/font';

const createCustomStyleButton = () => {
  const container = document.getElementById('naverIdLogin_loginButton');
  if (!container) throw new Error('Create NAVER custom login button failed');

  const logoWrapper = document.createElement('div');
  const logoIcon = document.createElement('i');
  logoWrapper.classList.add('logo_wrapper');
  logoWrapper.appendChild(logoIcon);

  const button = document.createElement('button');
  const text = document.createTextNode('NAVER로 시작하기');
  button.classList.add('custom_button');
  button.appendChild(text);
  button.appendChild(logoWrapper);

  container.appendChild(button);
};

const NaverSigninButton: FC = () => {
  useEffect(() => {
    initNaverSigninSDK().then(createCustomStyleButton);
  }, []);

  return (
    <>
      <Global
        styles={css`
          #naverIdLogin,
          #naverIdLogin_loginButton {
            width: 100%;
          }

          #naverIdLogin_loginButton {
            & > img {
              display: none;
            }

            & > .custom_button {
              position: relative;

              padding: 0;
              width: 100%;
              height: 50px;

              background: #ffffff;
              border: 1px solid #5dc872;
              box-sizing: border-box;
              border-radius: 50px;
              outline: none;

              ${font.set(16, 'bold')}

              cursor: pointer;

              transition: 0.15s ease-out;

              &:hover {
                box-shadow: 0 0 4px #5dc872;
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
                  background: url('./assets/naver_logo.png');
                  background-size: 20px 20px;
                  background-repeat: no-repeat;
                }
              }
            }
          }
        `}
      />
      <div id="naverIdLogin" />
    </>
  );
};

export default NaverSigninButton;

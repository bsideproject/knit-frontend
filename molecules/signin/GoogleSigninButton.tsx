import { css, Global } from '@emotion/react';
import { FC, useEffect } from 'react';
import { initGoogleSigninSDK } from '~/utils/auth';
import * as font from '~/styles/font';

const createCustomStyleButton = () => {
  const container = document.getElementById('googleIdLogin');
  if (!container || !container.firstChild)
    throw new Error('Create GOOGLE custom login button failed');

  const logoWrapper = document.createElement('div');
  const logoIcon = document.createElement('i');
  logoWrapper.classList.add('logo_wrapper');
  logoWrapper.appendChild(logoIcon);

  const button = document.createElement('button');
  const text = document.createTextNode('GOOGLE로 시작하기');
  button.classList.add('custom_button');
  button.appendChild(text);
  button.appendChild(logoWrapper);
  button.onclick = (container.firstChild as HTMLElement).onclick;
  container.appendChild(button);
};

const GoogleSigninButton: FC = () => {
  useEffect(() => {
    initGoogleSigninSDK().then(createCustomStyleButton);
  }, []);

  return (
    <>
      <Global
        styles={css`
          #googleIdLogin {
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
              box-sizing: border-box;
              border-radius: 50px;
              outline: none;

              ${font.set(16, 'bold')}

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
                  background: url('./assets/google_logo.png');
                  background-size: 20px 20px;
                  background-repeat: no-repeat;
                }
              }
            }
          }
        `}
      />
      <div id="googleIdLogin" />
    </>
  );
};

export default GoogleSigninButton;

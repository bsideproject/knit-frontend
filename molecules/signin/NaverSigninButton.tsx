import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames';
import { initNaverSigninSDK } from '~/utils/auth';
import { Container } from './NaverSigninButton.styled';

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await initNaverSigninSDK();
      createCustomStyleButton();
      setReady(true);
    })();
  }, []);

  return (
    <Container className={classNames({ ready })}>
      <Skeleton className="skeleton" />
      <div id="naverIdLogin" className="signin_button" />
    </Container>
  );
};

export default NaverSigninButton;

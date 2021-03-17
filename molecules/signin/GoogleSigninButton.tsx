import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import classNames from 'classnames';
import { initGoogleSigninSDK } from '~/utils/auth';
import { Container } from './GoogleSigninButton.styled';

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await initGoogleSigninSDK();
      createCustomStyleButton();
      setReady(true);
    })();
  }, []);

  return (
    <Container className={classNames({ ready })}>
      <Skeleton className="skeleton" />
      <div id="googleIdLogin" className="signin_button" />
    </Container>
  );
};

export default GoogleSigninButton;

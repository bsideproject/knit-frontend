import type { AppProps } from 'next/app';
import { VFC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { wrapper } from './store';
import { theme } from '~/styles';
import { Layout, AdminLayout } from '~/atoms/layout';
// import  from '~/atoms/layout/AdminLayout';

const App: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const { pathname } = router;
  let LayoutComponent = Layout;

  if (pathname.startsWith('/signin')) {
    return <Component />;
  }

  if (pathname.startsWith('/admin')) {
    LayoutComponent = AdminLayout;
  }

  return (
    <ThemeProvider theme={theme}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);

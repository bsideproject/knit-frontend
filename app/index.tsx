import type { AppProps } from 'next/app';
import { VFC } from 'react';
import { wrapper } from './store';
import { Layout, Header, Footer } from '~/atoms/layout';

const App: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const { pathname } = router;

  if (pathname.startsWith('/signin')) {
    return <Component />;
  }

  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
};

export default wrapper.withRedux(App);

import { FC } from 'react';
import Head from 'next/head';
import { Contents } from './Layout.styled';
import Header from './header';
import Footer from './footer';
import { useRootState } from '~/app/store';

interface LayoutProps {
  title?: string;
}

const Layout: FC<LayoutProps> = ({ title = 'Knit', children }) => {
  const headerHeightPx = useRootState(({ header }) => header.heightPx);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header />
      <Contents paddingTopPx={headerHeightPx}>{children}</Contents>
      <Footer />
    </>
  );
};
export default Layout;

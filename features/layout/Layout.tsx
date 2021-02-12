import Head from 'next/head';
import { ReactNode } from 'react';

import { Header } from '~/features/layout/header';
import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export default function Layout({ title = 'Knit', children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header key="header" />

      <div id="main">{children}</div>

      {/* <Footer key="footer" /> */}
    </div>
  );
}

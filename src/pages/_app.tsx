import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Words!</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

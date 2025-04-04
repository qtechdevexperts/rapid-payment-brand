import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.scss';
import '@fontsource-variable/inter';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rapid Payment</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header />
      {/* <SmoothScrolling> */}
      <Component {...pageProps} />
      {/* </SmoothScrolling> */}
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

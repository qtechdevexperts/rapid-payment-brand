import '@fontsource-variable/inter';
import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from '@/components/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Rapid Payment</title>
    </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

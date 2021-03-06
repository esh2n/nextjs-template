import 'sanitize.css';
import 'styles/globals.scss';
import React from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;

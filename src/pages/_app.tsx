import '@/styles/globals.css'
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { Barlow } from 'next/font/google';

const barlow = Barlow({
  weight: ["600", "700","900"],
  subsets: ["latin"],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={barlow.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

import theme from "@/theme";
import { ChakraProvider, chakra } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Barlow, Fraunces } from "next/font/google";

const barlow = Barlow({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const fraunces = Fraunces({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className={fraunces.variable}>
        <main className={barlow.variable}>
          <Component {...pageProps} />
        </main>
      </div>
    </ChakraProvider>
  );
}

import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { globalStylesCss } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStylesCss} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

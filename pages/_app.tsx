import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { globalStylesCss } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import studio from "@theatre/studio";
import r3fExtension from "@theatre/r3f/dist/extension";

// studio.extend(r3fExtension);
// studio.initialize();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStylesCss} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
  return (
    <Suspense fallback={null}>
      <Global styles={globalStylesCss} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Suspense>
  );
}

import Head from "next/head";

import "../styles/globals.css";

// Components
import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
        <title>بالومووی | BaluMovie</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>

  );
}

export default MyApp;
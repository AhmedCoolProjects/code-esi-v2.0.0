import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MainLayout } from "../src/components";
import { ApolloProvider } from "@apollo/client";
import { ApolloCustomeClient } from "../src/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="CODE ESI (Club Of Data Engineers ESI), the IT Club in The School Of Information Science - Rabat."
        />
        <meta
          name="keywords"
          content="code esi, code, esi, esi code, esi code club, esi code club esi, esi code club code, esi code club code esi, esi code club code esi code, esi code club code esi code club, esi code club code esi code club esi, esi code club code esi code club esi code, esi code club code esi code club esi code club, esi code club code esi code club esi code club esi, esi code club code esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi, esi code club code esi code club esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi code club esi, esi code club code esi code club esi code club esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi code club esi code, esi code club code esi code club esi code club esi code club esi code club esi code club esi, esi code club code esi code club esi code club esi code club esi code club esi code club"
        />
        <meta
          name="og:title"
          content="CODE ESI - Club Of Data Engineers from the school of information sciences"
        />
        <meta
          name="og:description"
          content="CODE ESI is an active club of engineering students from the school of information sciences where we meet to share and learn about awesome topics.
We talk about different fields in computer science and explain it to the community in a way that is simple and approachable."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9462389809344404"
          crossOrigin="anonymous"
        ></script>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </Head>

      <ApolloProvider client={ApolloCustomeClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;

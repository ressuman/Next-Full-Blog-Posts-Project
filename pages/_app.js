import RootLayout from "@/components/layout/root-layout/root-layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>Ressuman- My Blog Posts</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <meta
          name="description"
          content="Everything you need to know about my blog"
        />
        <link rel="icon" type="image/svg" href="/blog_post.svg" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

import RootLayout from "@/components/layout/root-layout/root-layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

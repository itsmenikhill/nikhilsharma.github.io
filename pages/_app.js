import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add("flex");
    document.body.classList.add("h-full");
    document.body.classList.add("flex-col");
    document.body.classList.add("bg-zinc-50");
    document.body.classList.add("dark:bg-black");
    document.body.classList.add("font-chakra");
  });

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

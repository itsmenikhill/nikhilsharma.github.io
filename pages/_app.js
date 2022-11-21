import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
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
        <AnimatePresence mode="wait" onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

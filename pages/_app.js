import "../styles/globals.css";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "../components/Navbar";
import Banner from "./components/Banner";
import "../styles/banner.scss";
import "../styles/marquee.scss";

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
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default MyApp;

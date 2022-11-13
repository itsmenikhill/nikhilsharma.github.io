import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikhil | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.75"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}

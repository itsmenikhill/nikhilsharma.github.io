import Script from "next/script";
import React from "react";
// import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen md:flex md:flex-row relative">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;

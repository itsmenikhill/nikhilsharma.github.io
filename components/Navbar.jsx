import React, { lazy } from "react";
// import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";
import { useState } from "react";

const Navbar = () => {
  const variants = {
    initial: {
      x: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  let Links = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Experience",
      link: "experience",
    },
    {
      name: "Contact Me",
      link: "contact",
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <aside className="flex justify-end align-middle w-full z-50 fixed sidebar bg-violet-200 dark:bg-zinc-700 p-6 transform">
          <div className="md:-translate-x-[870px] -translate-x-[275px] text-xl md:text-2xl font-semibold tracking-widest text-zinc-700 dark:text-gray-300">
            <p>Nikhil</p>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-3 top-6 cursor-pointer md:hidden"
          >
            <AiOutlineMenu></AiOutlineMenu>
          </div>
          <ul
            onClick={() => setOpen(false)}
            id="list"
            className={`md:flex md:items-center md:pb-0 pb-12 pt-10 h-screen md:pt-0 md:h-8 md:translate-x-0 absolute md:static md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
              open ? "translate-x-[200px] dark:bg-zinc-700 bg-violet-200" : "translate-x-[500px]"
            }`}
          >
            
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-lg font-semibold md:my-0 my-7"
              >
                <button>
                  <Link
                    onClick={() => setOpen(false)}
                    to={link.link}
                    smooth={true}
                    className="text-gray-600 dark:text-gray-300 font-bold relative hover:text-gray-800 ease-in duration-150 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Navbar;

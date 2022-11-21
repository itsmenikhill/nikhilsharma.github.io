import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    initial: {
      y: 1000,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -1000,
      opacity: 0,
    },
  };

  return (
    <div className="items-center md:justify-start md:ml-[25%] ">
      <div className="md:p-20 p-8">
        <motion.h1
          className="text-gray-700 dark:text-gray-300 font-semibold text-7xl md:text-9xl tracking-wider pb-8"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          WANT TO KNOW MORE?
        </motion.h1>
        <motion.h2
          className="text-gray-700 dark:text-gray-300 font-semibold text-3xl md:text-5xl tracking-wider pb-8"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.6,
          }}
        >
          LET&apos;S CHAT.
        </motion.h2>
        <motion.div
          className="flex justify-start animate-bounce m-32 mt-14 ml-2 text-gray-700 dark:text-white"
          variants={variants}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
          {/* <h1 className="pl-6 text-gray-200 animate-pulse">Scroll down</h1> */}
        </motion.div>
        <motion.div
          className="mt-12"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p className="text-lg pt-16 text-gray-700 dark:text-white tracking-wider max-w-3xl">
            Currently I am looking for some remote opportunities. My aim is to
            create something inspiring and amazing. I want to meet new people
            and create something amazing together. Feel free to reach out to me
            via any of my socials, or fill the form below.
          </p>
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <p className="text-3xl py-16 text-gray-700 dark:text-white">
            Contact Me
          </p>
          <div className="md:max-w-3xl border border-black dark:border dark:border-white  p-1 max-w-3xl rounded-2xl">
            <div className="flex flex-1">
              <form action="" className="w-full">
                <div className="md:m-6 m-2">
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Your Name"
                      className="rounded-xl placeholder-gray-700 dark:placeholder-gray-500 w-full border border-gray-300 px-3 py-2 shadow-sm bg-gray-200 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div className="md:m-6 pt-2 m-2">
                  <div className="mt-1">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="Your Email"
                      className="rounded-xl placeholder-gray-700 dark:placeholder-gray-500 w-full border border-gray-300 px-3 py-2 shadow-sm bg-gray-200 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div className="md:m-6 pt-2 m-2">
                  <div className="mt-1">
                    <textarea
                      type="text"
                      id="message"
                      name="email"
                      autoComplete="message"
                      required
                      placeholder="Message"
                      className="rounded-xl placeholder-gray-700 dark:placeholder-gray-500 w-full border border-gray-300 px-3 py-2 shadow-sm bg-gray-200 focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div className="md:m-6 pt-2 m-2">
                  <div className="mt-1 flex flex-col md:flex-row gap-4">
                    <button className="text-black bg-gray-200 border border-black-2 dark:border-white-2 dark:hover:bg-black dark:hover:text-white hover:text-black hover:bg-gray-300 transition duration-200 rounded-3xl p-6 md:w-[50%] w-full flex justify-center">
                      Send Message
                    </button>
                    <button className="text-black bg-gray-200 border border-black-2 dark:border-white-2 dark:hover:bg-black dark:hover:text-white hover:text-black hover:bg-gray-300 transition duration-200 rounded-3xl p-6 md:w-[50%] w-full flex justify-center">
                      <div className="flex">
                        Download CV
                        <div className="flex flex-cols pt-1 pl-4 text-md">
                          <AiOutlineDownload />
                        </div>
                      </div>
                    </button>
                    {/* <button className="bg-gray-600 rounded-3xl m-4 p-6 md:w-[50%] w-full flex justify-center">
                      Download CV
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-[0.75]">
              <div className="md:m-6 m-2 pt-4 w-full">
                {/* <div className="text-white font-medium">
                  Send me an email at:
                </div> */}
                <div className="text-gray-700 dark:text-white">
                  <p className="p-2 px-4 border border-white-2 w-56 rounded-3xl hidden">
                    nklsharma2152@gmail.com
                  </p>
                  <p className="py-4">
                    Feel free to reach out to me on any of my socials:
                  </p>
                  <div className="py-4 md:flex md:gap-4 flex gap-2">
                    <div className="md:pr-2 w-16 justify-center flex border border-white-2 rounded-full p-1 hover:bg-gray-300 hover:text-black dark:hover:bg-white dark:hover:text-black transition duration-200">
                      <AiOutlineMail />
                    </div>
                    <div className="pr-2 w-16 justify-center flex border border-white-2 rounded-full p-1 hover:bg-gray-300 hover:text-black dark:hover:bg-white dark:hover:text-black transition duration-200">
                      <FaLinkedinIn />
                    </div>
                    <div className="px-2 w-16 justify-center flex border border-white-2 rounded-full p-1 hover:bg-gray-300 hover:text-black dark:hover:bg-white dark:hover:text-black transition duration-200">
                      <FaGithub />
                    </div>
                    <div className="px-2 w-16 justify-center flex border border-white-2 rounded-full p-1 hover:bg-gray-300 hover:text-black dark:hover:bg-white dark:hover:text-black transition duration-200">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

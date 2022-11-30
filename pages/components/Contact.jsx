import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { delay, motion } from "framer-motion";
import Banner from "./Banner";
import Script from "next/script";

const Contact = () => {
  const variants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: -100,
      opacity: 1,
    },
  };

  // const handleClick = () => {
  //   const btn = document.getElementById("msgSent");
  //   setTimeout(() => {
  //     btn.classList.remove("hidden");
  //   }, 1200);
  //   setTimeout(() => {
  //     btn.classList.add("hidden");
  //   }, 3000);
  // };

  return (
    <>
      <Script id="show-banner">
        {`
          const scriptURL = 'https://script.google.com/macros/s/AKfycbxpcaPbdYcGiiMtkIbG1xvaBxgYwN04oXwDzbkBgGi5jm25G2iiHRtdIFV01QFW6dJwqQ/exec'
          const form = document.forms['submit-to-google-sheet']
          const btn = document.getElementById("msgSent");
          form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            btn.innerHTML = "Message sent!"
            setTimeout(() => {
              btn.innerHTML = ""
            }, 3000);
          })
          .catch(error => console.error('Error!', error.message))
        })
      `}
      </Script>

      <div id="contact" className="md:text-[24rem] text-[8rem] pt-8">
        <div className="absolute md:pt-16 pt-8">
          <div className="dark:text-gray-900 text-violet-100">
            <Banner text="contact me" />
          </div>
        </div>
        <div className="relative dark:text-gray-300 text-violet-400">
          <Banner text="CONTACT ME" />
        </div>
      </div>

      <div className="items-center md:justify-start md:ml-[10%] mt-20">
        <div className="md:p-20 p-8">
          <motion.div
            className=""
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
              staggerChildren: 0.4,
            }}
          >
            <div>
              <motion.p
                className="md:text-7xl text-3xl text-gray-700 dark:text-white tracking-widest max-w-3xl py-8 font-michroma"
                initial={{
                  y: 300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  type: "spring",
                  mass: 0.1,
                  // delay: 0.5,
                  stiffness: 50,
                  staggerChildren: 0.4,
                }}
              >
                Are you working on something interesting? <br /> <br />
                Let&apos;s chat.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="pt-16"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="p-1 md:flex">
              <div className="contact-left basis-[60%]">
                <form
                  name="submit-to-google-sheet"
                  action=""
                  className="max-w-xl flex flex-col dark:text-gray-700 text-black"
                >
                  <input
                    name="Name"
                    className="m-2 p-2 border-b-2 dark:bg-black bg-transparent focus:outline-none"
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    name="Email"
                    className="m-2 p-2 border-b-2 dark:bg-black bg-transparent focus:outline-none"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="Message"
                    className="m-2 p-2 border-b-2 dark:bg-black bg-transparent focus:outline-none"
                    placeholder="Your message"
                    id="msg"
                    cols="43"
                    rows="5"
                  ></textarea>
                  <button
                    id="btn"
                    className="text-white dark:text-gray-100 text-xl md:w-60 w-full mt-8 bg-purple-500 rounded-3xl px-8 py-2 hover:bg-purple-800 transtion ease-in-out duration-200"
                  >
                    Send Message
                  </button>
                  <p id="msgSent" className="pt-8 text-lg dark:text-purple-400"></p>
                </form>
              </div>
              <div className="contact-right basis-[35%] text-xl pt-8 text-gray-700 dark:text-gray-300">
                <h2>Feel free to reach out to me!</h2>
                <div className="flex mt-8 sm:hidden ">
                  <div className="my-auto">
                    <AiOutlineMail />
                  </div>
                  <p className="mx-2 my-auto">nklsharma2152@gmail.com</p>
                </div>
                <div className="flex gap-6 text-2xl mt-8 ">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/itsmenikhill"
                    className="hover:scale-[1.4] transition duration-300 ease-in-out"
                  >
                    <FaGithub />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/itsnikhilpeeps"
                    className="hover:scale-[1.4] transition duration-300 ease-in-out"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/itsnikhilhere/"
                    className="hover:scale-[1.4] transition duration-300 ease-in-out"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.twitter.com/nikshar96"
                    className="hover:scale-[1.4] transition duration-300 ease-in-out"
                  >
                    <FaTwitter />
                  </a>
                </div>

                <button className="dark:text-gray-100 text-white w-full md:w-48 mt-8 bg-purple-500 rounded-3xl px-6 py-2 hover:bg-purple-800 transtion ease-in-out duration-200">
                  <a href="resume.pdf" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "./Banner";

const About = () => {
  const variants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "spring",
      mass: 0.1,
      stiffness: 50,
      staggerChildren: 0.4,
    },
  };
  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          id="home"
          className="items-center md:justify-center md:ml-[16%] pt-24 max-w-5xl flex"
          exit={{ y: -1000, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.div
            className="relative md:-right-96 md:-top-20"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              // duration: 150
            }}
          >
            <img
              className="rounded-full bg-gradient-to-b from-white to-violet-400 dark:from-black dark:to-black"
              src="nikhil.png"
              alt=""
            />
          </motion.div>
          <div className="absolute md:p-10 p-8 md:pt-0 pt-[550px] md:left-20 md:top-60">
            <motion.div
              className="md:flex md:flex-row z-10 max-w-xl left-0"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.h1
                className="text-gray-700 dark:text-gray-300 font-medium text-6xl md:text-[9rem] max-w-xl tracking-wider pb-8 md:pb-8"
                variants={variants}
                transition={{ type: "spring", stiffness: 50, mass: 0.1 }}
              >
                <span className="bg-gradient-to-r from-black to-white dark:from-gray-300 dark:to-gray-300 bg-clip-text text-transparent md:bg-gradient-to-r md:from-gray-700 md:to-gray-700 md:dark:from-gray-300 md:dark:to-gray-300">
                  NIKHIL
                </span>{" "}
                SHARMA
              </motion.h1>
            </motion.div>
            <motion.h2
              className="text-gray-700 dark:text-gray-300 font-medium text-2xl md:text-7xl max-w-3xl tracking-wider pb-16 ml-1"
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                type: "spring",
                stiffness: 50,
                mass: 0.1,
                delay: 0.3,
              }}
            >
              Software Engineer
            </motion.h2>
          </div>
        </motion.div>
      </div>
      <div className="md:pl-32 md:p-24 p-4 m-8 pt-48">
        <motion.p
          className="max-w-3xl relative md:text-3xl text-2xl md:pt-8 text-gray-700 dark:text-gray-300 tracking-wider pb-20 font-light"
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{
            type: "spring",
            mass: 0.1,
            stiffness: 50,
            staggerChildren: 0.4,
          }}
        >
          Hi, I am <span>Nikhil</span>, a software developer based in India. I
          am an <span className="font-bold">Engineering </span>graduate in{" "}
          <span className="font-bold"> Information Technology</span>. When I am
          not sitting in front of a computer screen I like to take a walk or
          play Call of Duty.
        </motion.p>
      </div>
    </>
  );
};

export default About;

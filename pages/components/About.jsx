import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const variants = {
    initial: {
      y: 1000,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="items-center md:justify-start md:ml-[25%]"
      exit={{ y: -1000, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="md:p-20 p-8">
        <div className="md:flex md:flex-row">
          <motion.h1
            className="text-gray-700 dark:text-gray-300 font-semibold text-7xl md:text-9xl max-w-xl tracking-wider"
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ type: "spring", stiffness: 50, mass: 0.1 }}
          >
            NIKHIL SHARMA
          </motion.h1>
          <motion.img
            src="/profile.png"
            className="md:rounded-full rounded-3xl md:ml-20 mt-8 md:mt-8 overflow-hidden object-cover md:h-[200px] md:w-[200px] h-[100px] w-[100px] border-4 dark:border-white border-gray-700"
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 0.1,
              delay: 0.5,
            }}
          />
        </div>

        <motion.h2
          className="text-gray-700 dark:text-gray-300 font-semibold text-4xl md:text-7xl max-w-2xl tracking-wider pt-8 pb-4"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ type: "spring", stiffness: 50, mass: 0.1, delay: 0.3 }}
        >
          Software Dev
        </motion.h2>
        <motion.p
          className="text-lg pt-8 text-gray-700 dark:text-gray-300 tracking-wider max-w-2xl pb-20"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ type: "spring", stiffness: 50, mass: 0.1, delay: 0.6 }}
        >
          Hi, I am <span>Nikhil</span>, a software developer based in India. I
          am a passionate software developer looking to create some interesting
          stuff and meeting awesome people while I do that. Feel free to connect
          with me.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;

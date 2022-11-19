import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="items-center md:justify-start md:ml-[25%]"
      // transition={{ delay: 0.5 }}
    >
      <div className="md:p-20 p-8">
        <motion.h1
          className="text-gray-700 dark:text-gray-300 font-semibold text-7xl md:text-9xl tracking-wider"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, bounce: 0 }}
        >
          NIKHIL SHARMA
        </motion.h1>
        <motion.h2
          className="text-gray-700 dark:text-gray-300 font-semibold text-4xl md:text-7xl tracking-wider pt-12 pb-4"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, bounce: 0, delay: 0.30 }}
        >
          Software Dev
        </motion.h2>
        <motion.p
          className="text-lg pt-8 text-gray-700 dark:text-gray-300 tracking-wider max-w-3xl pb-20"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, bounce: 0, delay: 0.60 }}
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

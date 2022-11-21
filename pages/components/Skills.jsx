import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
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
    <div
      className="items-center md:justify-start md:ml-[25%]"
    >
      <div className="md:p-20 p-8">
        <motion.h1
          className="text-gray-700 dark:text-gray-300 font-semibold text-7xl md:text-9xl tracking-wider pb-8"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ type: "spring", stiffness: 50, mass: 0.1 }}
        >
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            WHAT DO I KNOW?
          </motion.div>
        </motion.h1>
        <div>
          <motion.div
            className="flex justify-start animate-bounce m-32 ml-2 text-gray-700 dark:text-white"
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
          <motion.ul
            className="grid grid-cols-1 pt-12 text-gray-700 dark:text-white"
            exit={{ opacity: 0 }}
          >
            <li className="text-3xl font-semibold mt-8">JAVA</li>
            <li className="text-3xl font-semibold mt-8">JAVASCRIPT</li>
            <li className="text-3xl font-semibold mt-8">HTML</li>
            <li className="text-3xl font-semibold mt-8">CSS</li>
            <li className="text-3xl font-semibold mt-8">NEXT.js</li>
            <li className="text-3xl font-semibold mt-8">React</li>
            <li className="text-3xl font-semibold mt-8">Tailwind CSS</li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

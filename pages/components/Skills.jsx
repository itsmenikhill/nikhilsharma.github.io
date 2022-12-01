import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "./Banner";

const Skills = () => {
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

  return (
    <>
      <div className="md:text-[24rem] text-[8rem] pt-8" id="skills">
        <div className="absolute md:pt-16 pt-8">
          <div className="dark:text-gray-900 text-violet-100">
            <Banner text="skills" />
          </div>
        </div>
        <div className="relative dark:text-gray-300 text-violet-400">
          <Banner text="SKILLS" />
        </div>
      </div>
      <div className="items-center md:justify-start md:ml-[16%] pt-32 max-w-5xl">
        <div className="md:p-20 p-8">
          <div>
            <motion.ul
              className="grid grid-cols-1 pt-12 text-gray-700 dark:text-white"
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
              <div className="grid md:grid-cols-3 grid-cols-1 gap-20 m-10 md:m-0">
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-8">
                    <img className="rounded-t-lg" src="/java.png" alt="" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      Java
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-8">
                    <img
                      className="rounded-t-lg"
                      src="/javascript.png"
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      Javascript
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-8">
                    <img className="rounded-t-lg" src="/html.png" alt="" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      HTML
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-8">
                    <img className="rounded-t-lg" src="/css.png" alt="" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      CSS
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-14">
                    <img className="rounded-t-lg" src="/react.png" alt="" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      React
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-8 pb-20">
                    <div className="dark:bg-white top-4 rounded-full h-[114px] w-[114px] relative "></div>
                    <img
                      className="absolute rounded-t-lg"
                      src="/nextjs.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="mb-6 mt-1 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      NextJS
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-8">
                    <img className="rounded-t-lg" src="/tailwind.png" alt="" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      TailwindCSS
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center align-center py-10">
                    <img
                      className="rounded-t-lg h-32 w-32"
                      src="/git.png"
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      Git
                    </h5>
                  </div>
                </div>
                <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="md:py-32 py-32">
                    <h5 className="text-2xl font-bold tracking-tight flex justify-center text-gray-900 dark:text-white">
                      And more..
                    </h5>
                  </div>
                </div>
              </div>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

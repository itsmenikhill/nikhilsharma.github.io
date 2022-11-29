import React from "react";
import { motion } from "framer-motion";
import Banner from "./Banner";

const Experience = () => {
  const variants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: -100,
      opacity: 1,
    },
  };

  return (
    <>
      <div
        className="md:text-[24rem] text-[8rem] pt-40 md:pt-28"
        id="experience"
      >
        <div className="absolute md:pt-16 pt-8">
          <div className="text-gray-900">
            <Banner text="experience" />
          </div>
        </div>
        <div className="relative">
          <Banner text="EXPERIENCE" />
        </div>
      </div>
      <div className="items-center md:justify-start md:ml-[16%] pt-6 max-w-5xl">
        <div className="md:p-20 p-14">
          <div
            className="grid"
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div
              className="md:flex justify-start flex-cols pt-12 max-w-4xl"
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
              <div className="md:flex flex-1 pt-6 md:pt-12">
                <div className="md:grid grid-rows-3">
                  <div className="bg-gray-200 dark:bg-gray-400 px-1 -skew-x-[24deg]">
                    <h1 className="md:text-3xl px-2 md:px-0 mt-1 skew-x-[24deg] text-gray-700 dark:text-white ml-2">
                      Senior Systems Engineer
                    </h1>
                  </div>
                  <h1 className="text-xl pt-1 text-gray-700 dark:text-white">
                    Infosys Ltd.
                  </h1>
                  <h1 className="text-xl text-gray-700 dark:text-white">
                    May 2022-present
                  </h1>
                </div>
              </div>
              <div className="flex flex-[1.5]">
                <div className="pt-12 md:p-12">
                  <p className="text-gray-700 dark:text-white text-xl">
                    I was a part of the development team for a &apos;Goods and
                    Services Tax Network&apos; project, which is a
                    non-government organisation that manages the entire IT
                    system of the GSTN portal. GSTN portal allowed users to
                    register or track every financial transaction and provides
                    taxpayers with all the services.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-gray-700 dark:text-white md:flex justify-start flex-cols mt-12 max-w-4xl"
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
              <div className="md:flex flex-1 pt-6 md:pt-12">
                <div className="md:grid grid-rows-5">
                  <div className="bg-gray-200 dark:bg-gray-400 px-1 -skew-x-[24deg] ">
                    <h1 className="text-3xl px-2 md:px-0 mt-1 skew-x-[24deg]">
                      Systems Engineer
                    </h1>
                  </div>

                  <h1 className="text-xl pt-1">Infosys Ltd.</h1>
                  <h1 className="text-xl">Jan 2021- May 2022</h1>
                </div>
              </div>
              <div className="flex-[1.5]">
                <div className="pt-12 md:p-12">
                  <p className="text-xl">
                    The main area of my expertise is Backend development. During
                    my time in Infosys, I have worked on projects that have had
                    very strong impact in the organization. &apos;My Business
                    Report&apos; was a project on which the users could track
                    the weekly, monthly, quarterly or yearly business of the
                    organization.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:flex justify-start flex-cols mt-12 max-w-4xl"
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
              <div className="md:flex flex-1 pt-6 md:pt-12">
                <div className="md:grid grid-rows-5">
                  <div className="bg-gray-200 dark:bg-gray-400 px-1 -skew-x-[24deg]">
                    <h1 className="text-gray-700 dark:text-white text-3xl px-2 md:px-0 mt-1 skew-x-[24deg]">
                      Open Source
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex-[1.5]">
                <div className="pt-12 md:p-12">
                  <p className="text-gray-700 dark:text-white text-xl ">
                    I have been trying to contribute to the open source
                    community for some time now. I also participated in
                    Hacktober Fest 2022. Had two PRs merged.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = (props) => {
  const [playMarquee, setPlayMarquee] = useState(false);
  console.log(props.text);
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <AnimatePresence>
      <motion.div className="banner" variants={banner}>
        <BannerRowCenter title={ props.text } playMarquee={playMarquee} />
      </motion.div>
    </AnimatePresence>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <>
      
      <div className={`banner-row marquee w-screen  ${playMarquee && "animate"}`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className="marquee__inner"
        >
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    </>
  );
};

export default Banner;

import React from "react";

const About = () => {
  return (
    <div className="items-center md:justify-start md:ml-[25%] ">
      <div className="md:p-20 p-8">
        <h1 className="text-white font-semibold text-7xl md:text-9xl tracking-wider">
          NIK<span className="text-cyan-500">HI</span>L SHARMA
        </h1>
        <h2 className="text-white font-semibold text-4xl md:text-7xl tracking-wider pt-12 pb-4">Software Dev</h2>
        <p className="text-lg pt-8 text-white tracking-wider max-w-3xl pb-20">
          Hi, I am <span>Nikhil</span>, a software developer based in India. I
          am a passionate software developer looking to create some interesting
          stuff and meeting awesome people while I do that. Feel free to connect
          with me.
        </p>
      </div>
    </div>
  );
};

export default About;

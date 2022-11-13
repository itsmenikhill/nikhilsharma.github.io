import React from "react";

const Skills = () => {
  return (
    <div className="items-center md:justify-start md:ml-[25%]">
      <div className="md:p-20 p-8">
        <h1 className="text-white font-semibold text-7xl md:text-9xl tracking-wider pb-8">
          WHAT DO I KNOW?
        </h1>
        <div>
        <div className="flex justify-start animate-bounce m-32 ml-2">
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
        </div>
          <ul className="grid grid-cols-1 pt-12">
            <li className="text-3xl font-semibold mt-8">JAVA</li>
            <li className="text-3xl font-semibold mt-8">JAVASCRIPT</li>
            <li className="text-3xl font-semibold mt-8">HTML</li>
            <li className="text-3xl font-semibold mt-8">CSS</li>
            <li className="text-3xl font-semibold mt-8">nextJS</li>
            <li className="text-3xl font-semibold mt-8">Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

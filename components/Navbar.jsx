import React, { lazy } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const handleClick = () => {
    let sidebar = document.querySelector(".mob-nav");
    if (sidebar.classList.contains("translate-x-full")) {
      sidebar.classList.remove("translate-x-full");
    } else {
      sidebar.classList.add("translate-x-full");
    }
  };

  return (
    <>
      {/* <div className="bg-zinc-300/20 text-gray-100 flex justify-between sticky top-0 md:hidden">
        <a href="" className="block p-4 text-white font-bold">
          :)
        </a>
      </div> */}

      <div className="md:flex md:h-screen">
        <aside className="w-[25%] fixed h-screen sidebar bg-zinc-300/20 p-10 transform -translate-x-full transition md:translate-x-0 ease-in-out duration-200">
          <ul className="float-right justify-center align-middle pt-[60%]">
            <li className="p-4">
              <Link legacyBehavior href="/components/About">
                <a className="no-underline text-gray-300 font-bold relative hover:text-cyan-300  ease-in duration-150 ">
                  Home
                </a>
              </Link>
            </li>
            <li className="p-4">
              <Link legacyBehavior href="/components/Skills">
                <a className="no-underline text-gray-300 font-bold relative hover:text-cyan-300 ease-in duration-150">
                  Skills
                </a>
              </Link>
            </li>
            <li className="p-4">
              <Link legacyBehavior href="/components/Experience">
                <a className="no-underline text-gray-300 font-bold relative hover:text-cyan-300 ease-in duration-150">
                  Experience
                </a>
              </Link>
            </li>
            <li className="p-4">
              <Link legacyBehavior href="/components/Contact">
                <a className="no-underline text-gray-300 font-bold relative hover:text-cyan-300 ease-in duration-150">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Navbar;

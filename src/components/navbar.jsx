import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  const navbarCards = [
    {
      title: "About",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      path: "/",
    },
    {
      title: "Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),

      path: "resume",
    },
    {
      title: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      ),
      path: "projects",
    },
  ];
  return (
    <>
      <div className="block my-3 p-8">
        <div className="lg:columns-2 justify-between ">
          <div className="w-full inline-block text-5xl text-white mb-4">
            Hello 👋
            <div className="flex pt-3 z-30">
              <div className="flex  text-white mt-3 pr-3">I'm</div>
              <div className="flex text-6xl  bg-gradient-to-r font-name font-black pt-2 from-red-500 to-violet-700 text-transparent bg-clip-text">
                Sweekruth
              </div>
            </div>
          </div>
          <div className="container flex items-end   ">
            <div className=" flex gap-x-10  lg:pt-20">
              {navbarCards.map((item) => {
                return (
                  <>
                    <Link to={item.path}>
                      <button className="flex bg-neutral-800 px-5 py-3 h-12 text-md hover:bg-gradient-to-r from-red-500 to-violet-700 text-white rounded-md">
                        <span className="pr-3">{item.icon}</span>
                        {item.title}
                      </button>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

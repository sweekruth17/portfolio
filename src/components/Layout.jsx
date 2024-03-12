import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import About from "./About";
const Layout = () => {
  return (
    <>
      <div
        className="
      h-screen fixed w-full bg-black overflow-y-auto "
      >
        <div className="mx-12 md:mx-[100px]  ">
          <div className="  max-w-[1350px]  mx-auto">
            <Navbar></Navbar>
          </div>

          <div className="bg-resumebg mt-20 max-w-[1350px] text-white mx-auto shadow-md p-4 px-5 md:px-10 xl:px-20 md:mt-3  rounded-2xl  ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

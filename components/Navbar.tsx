import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
interface Props {
  openNav:()=>void;
}

const Navbar = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-gray-100 font-bold">
          Dev
          <span className="text-gray-400">Ops</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">Services</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

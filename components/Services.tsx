import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-gray-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
              Frontend
            </h1>
            <p className="text-[15px] text-white font-normal">
              Proficient in HTML, CSS, and JavaScript, ReactJS, NextJS.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
              Backend
            </h1>
            <p className="text-[15px] text-white font-normal">
              Proficient in server-side programming languages like Python, Java,
              or Node.js.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
              Web-Designer
            </h1>
            <p className="text-[15px] text-white font-normal">
              Proficient tools like Figma, skills with an
              understanding of (UI) & (UX).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

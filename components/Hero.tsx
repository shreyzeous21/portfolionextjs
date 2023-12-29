import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div className="h-[90vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center filter grayscale">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold overline">
            HI, I'M
            <span className="text-gray-500 cursor-wait overline "> SHREY!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
            hello i am shrey sadhukhan
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-black via-slate-200 to-black transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 border rounded-full">
              <a href="/ShreySadhukhan-resume.pdf" download>
                <p>Download cv</p>
              </a>
                <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-gray-600 transition-all duration-300 text-[#55e6a5]" />
              <a href="https://www.youtube.com/watch?v=4E1GIAGfEz8">
                <p className="text-[20px] font-semibold text-white">
                  Watch The Video
                </p>
              </a>
            </button>
          </div>
        </div>
        <div data-aos="zoom-in" className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;

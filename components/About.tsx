import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-black via-gray-700 to-black pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-gray-400 mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-gray-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-500 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Transitioning from vision to web development involves translating
              conceptual ideas into tangible digital experiences. This process
              integrates design elements, user interfaces, and functionality to
              create engaging websites. Collaboration between designers and
              developers ensures the realization of the initial vision,
              delivering a seamless and interactive online presence
            </p>
          </div>
          <button className="px-[2rem] hover:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-black via-slate-200 to-black transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-[#fff] text-black flex items-center space-x-2 border rounded-full">
            <a href="https://roadmap.sh/">
              <p>Check For Road Map</p>
            </a>
          </button>
        </div>
        <div data-aos="fade-left" className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] relative">
          <Image
            src="/images/about.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-full h-full object-contain grayscale"
          />
          <div className="absolute w-full h-full z-[10]  bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-black via-gray-700 to-black top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

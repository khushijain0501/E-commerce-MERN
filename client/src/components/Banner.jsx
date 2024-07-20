import React, { useState } from "react";
import Countdown from "./Countdown";
import bannerImg from "../assets/banner.png"

const Banner = () => {
    const [countdownType,setcountdownType]=useState("banner");
  return (
    <div className="flex justify-center items-center">
      <div className="w-[95%] bg-black flex justify-between gap-2 m-4">
        <div className="w-1/2 flex flex-col gap-3 md:gap-6 lg:gap-8 font-bold py-8 pl-8">
          <div className="text-xs text-[#00FF66] md:text-sm lg:text-md xl:text-lg">Categories</div>
          <div className="text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl">
            Enhance Your Music Experience
          </div>
          <Countdown type={countdownType}/>
          <div className="flex items-center">
            <button className="bg-[#00FF66] text-xs md:text-sm lg:text-md xl:text-lg text-white font-semibold p-2 px-6 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-1/2 py-8 flex justify-center items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 from-0.1% to-black to-75%">
            <img src={bannerImg} alt={bannerImg} className="sm:w-[90%] lg:w-[80%] xl:w-[70%]"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import PopularCard from "../../Cards/Popular-Card/PopularCard";

const PopularDiv = () => {
  return (
    <div className="w-full h-full px-[1.3rem] ">
      {/* Popular Heading With Sort */}
      <div className="flex justify-between items-center  pl-[1rem] py-[1rem] mb-[1rem]">
        <h1 className="font-semibold text-[2rem] text-gray-900">Popular</h1>
        <div className="flex gap-[2px] text-[1.3rem] font-semibold text-gray-500">
          <span className=" text-gray-700  rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] bg-[#F5F6F8]">
            Hot
          </span>
          <span className=" rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem]">
            New
          </span>
          <span className=" rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem]">
            Controversial
          </span>
          <span className=" rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem]">
            Rising
          </span>
          <span className=" rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem]">
            Top
          </span>
        </div>
      </div>

      {/* Popular Sort Results */}
      <div className=" w-full h-full">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
};

export default PopularDiv;

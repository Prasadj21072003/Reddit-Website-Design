import React from "react";
import Storage from "../../../storage/Storage";

const PopularSort = () => {
  const { populartopic, setpopulartopic, setsearch } = Storage();

  return (
    <div className="flex justify-between items-center  pl-[1rem] py-[1rem] mb-[1rem]">
      <h1 className="font-semibold text-[2rem] text-gray-900">Popular</h1>
      <div className="flex gap-[2px] text-[1.3rem] font-semibold text-gray-500">
        <span
          onClick={() => {
            setpopulartopic("hot");
            setsearch("");
          }}
          className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
            populartopic === "hot" ? `bg-[#F5F6F8] text-gray-700` : ` `
          }`}
        >
          Hot
        </span>
        <span
          onClick={() => {
            setpopulartopic("new");
            setsearch("");
          }}
          className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
            populartopic === "new" ? `bg-[#F5F6F8] text-gray-700` : ` `
          }`}
        >
          New
        </span>
        <span
          onClick={() => {
            setpopulartopic("controversial");
            setsearch("");
          }}
          className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
            populartopic === "controversial"
              ? `bg-[#F5F6F8] text-gray-700`
              : ` `
          }`}
        >
          Controversial
        </span>
        <span
          onClick={() => {
            setpopulartopic("rising");
            setsearch("");
          }}
          className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
            populartopic === "rising" ? `bg-[#F5F6F8] text-gray-700` : ` `
          }`}
        >
          Rising
        </span>
        <span
          onClick={() => {
            setpopulartopic("top");
            setsearch("");
          }}
          className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
            populartopic === "top" ? `bg-[#F5F6F8] text-gray-700` : ` `
          }`}
        >
          Top
        </span>
      </div>
    </div>
  );
};

export default PopularSort;

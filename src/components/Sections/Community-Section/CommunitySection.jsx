import React, { memo } from "react";
import Storage from "../../../storage/Storage";

const CommunitySection = memo(() => {
  const { setcommunity, community, setsearch } = Storage();
  return (
    <div className="py-[25px]">
      {/*Heading*/}
      <h1 className="w-full mb-[1.5rem] px-[1.2rem] flex items-center justify-between font-bold text-gray-700 text-[1rem]">
        COMMUNITY
        <span className="text-[1rem] text-[#B8C1C9] font-semibold">All</span>
      </h1>
      {/*Info*/}
      <div className=" w-full flex flex-col gap-[18px]  px-[0.5rem] ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1681868376745-0565b18b4c8c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[20px]  ml-[12px] mr-[6px] w-[20px]   rounded-full  "
            />
            <span
              onClick={() => {
                setcommunity("funymore");
                setsearch("");
              }}
              className={` font-semibold  text-[1.1rem] cursor-pointer ${
                community === `funymore` ? `text-orange-600` : `text-[#354B60]`
              }`}
            >
              r/funymore
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1673746231217-70a97d4cc160?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[20px]  ml-[12px] mr-[6px] w-[20px]   rounded-full  "
            />
            <span
              onClick={() => {
                setcommunity("breakingnews");
                setsearch("");
              }}
              className={` font-semibold  text-[1.1rem] cursor-pointer ${
                community === `breakingnews`
                  ? `text-orange-600`
                  : `text-[#354B60]`
              }`}
            >
              r/breakingnews
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1736210519820-00ee6c452a43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[20px]  ml-[12px] mr-[6px] w-[20px]   rounded-full  "
            />
            <span
              onClick={() => {
                setcommunity("gaming");
                setsearch("");
              }}
              className={` font-semibold  text-[1.1rem] cursor-pointer ${
                community === `gaming` ? `text-orange-600` : `text-[#354B60]`
              }`}
            >
              r/gaming
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] text-gray-600 font-bold rounded-[5px] bg-[#E8EEF2] ">
            43
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1725446034373-b698ca6966a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[20px]  ml-[12px] mr-[6px] w-[20px]   rounded-full  "
            />
            <span
              onClick={() => {
                setcommunity("lovestory");
                setsearch("");
              }}
              className={` font-semibold  text-[1.1rem] cursor-pointer ${
                community === `lovestory` ? `text-orange-600` : `text-[#354B60]`
              }`}
            >
              r/lovestory
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] font-bold text-gray-600 rounded-[5px] bg-[#E8EEF2] ">
            12
          </span>
        </div>
      </div>
    </div>
  );
});

export default CommunitySection;

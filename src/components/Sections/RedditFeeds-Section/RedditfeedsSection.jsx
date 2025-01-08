import React from "react";

const RedditfeedsSection = () => {
  return (
    <div className="py-[30px] border-t border-b border-gray-300">
      {/*Heading*/}
      <h1 className="w-full mb-[1.5rem] px-[1.2rem] flex items-center justify-between font-bold text-gray-700 text-[1rem]">
        REDDIT FEEDS
        <span className="text-[1rem] text-[#B8C1C9] font-semibold">All</span>
      </h1>
      {/*Info*/}
      <div className=" w-full flex flex-col   gap-[25px]  px-[0.5rem] ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1668456451964-e31c33d87a0f?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full   "
            />
            <span className="text-[#354B60] font-semibold text-[1.1rem] ">
              r/moview
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] font-bold text-gray-600 rounded-[5px] bg-[#E8EEF2] ">
            04
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1667853671243-a15b02fbe3b2?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full   "
            />
            <span className="text-[#354B60] font-semibold  text-[1.1rem]">
              r/gaming
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://images.unsplash.com/photo-1735900415719-e8e448aeef18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full   "
            />
            <span className="text-[#354B60] font-semibold text-[1.1rem]">
              r/pics
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] font-bold text-gray-600 rounded-[5px] bg-[#E8EEF2] ">
            32
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://images.unsplash.com/photo-1654295914994-3e13ce8d7356?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full   "
            />
            <span className="text-[#354B60] font-semibold  text-[1.1rem]">
              r/gifs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditfeedsSection;

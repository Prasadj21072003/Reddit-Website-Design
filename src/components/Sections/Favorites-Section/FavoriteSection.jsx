import React from "react";

const FavoriteSection = () => {
  return (
    <div className="py-[30px]">
      {/*Heading*/}
      <h1 className="w-full mb-[1.5rem] px-[1.2rem] flex items-center justify-between font-bold text-gray-700 text-[1rem]">
        FAVORITES{" "}
        <span className="text-[1rem] text-[#B8C1C9] font-semibold">All</span>
      </h1>
      {/*Info*/}
      <div className=" w-full flex flex-col   gap-[25px]  px-[0.5rem] ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://images.unsplash.com/photo-1721332153521-120cb0cd02d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full    "
            />
            <span className="text-[#354B60] font-semibold text-[1.1rem] ">
              r/funymore
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] font-bold text-gray-600 rounded-[5px] bg-[#E8EEF2] ">
            156
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1678727388867-25e2e90a08d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full    "
            />
            <span className="text-[#354B60] font-semibold  text-[1.1rem]">
              r/breakingnews
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] font-bold text-gray-600 rounded-[5px] bg-[#E8EEF2] ">
            12
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://images.unsplash.com/photo-1735657090869-a81c50626bd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="   h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full    "
            />
            <span className="text-[#354B60] font-semibold  text-[1.1rem]">
              r/funymore
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[5px]">
            <img
              src="https://images.unsplash.com/photo-1700710076724-68fddea71ed1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              srcSet=""
              className="h-[28px] ml-[12px] mr-[6px] w-[28px] rounded-full    "
            />
            <span className="text-[#354B60] font-semibold  text-[1.1rem]">
              r/funymore
            </span>
          </div>
          <span className="px-[0.8rem] py-[0.2rem] font-bold text-gray-600 rounded-[5px] bg-[#E8EEF2] ">
            08
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteSection;

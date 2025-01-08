import React from "react";
import LeftSidebar from "../../Sidebars/Left-Sidebar/LeftSidebar";
import RightSidebar from "../../Sidebars/Right-Sidebar/RightSidebar";
import PopularDiv from "../Popular-Div/PopularDiv";

const Maindiv = () => {
  return (
    <div className="w-full h-auto   bg-[#F2F7FB] pt-[1.3rem] flex">
      {/*Left Sidebar*/}
      <div className=" h-full  w-[19%]">
        <LeftSidebar />
      </div>
      {/*Center Div*/}
      <div className=" h-full flex-1 rounded-[15px] bg-[#FFFFFF] ">
        <PopularDiv />
      </div>
      {/*Right Sidebar*/}
      <div className=" h-full w-[16.5%] ">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Maindiv;

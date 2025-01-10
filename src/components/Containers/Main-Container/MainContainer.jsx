import React, { memo } from "react";
import LeftSidebar from "../../Sidebars/Left-Sidebar/LeftSidebar";
import RightSidebar from "../../Sidebars/Right-Sidebar/RightSidebar";
import PopularContainer from "../Popular-Container/PopularContainer";

const MainContainer = memo(() => {
  return (
    <div className="w-full h-auto   bg-[#F2F7FB] pt-[1.3rem] flex">
      {/*Left Sidebar*/}
      <div className=" h-full  w-[19%]">
        <LeftSidebar />
      </div>
      {/*Center Div*/}
      <div className=" h-full flex-1 rounded-t-[15px] bg-[#FFFFFF] ">
        <PopularContainer />
      </div>
      {/*Right Sidebar*/}
      <div className=" h-full w-[16.5%] ">
        <RightSidebar />
      </div>
    </div>
  );
});

export default MainContainer;

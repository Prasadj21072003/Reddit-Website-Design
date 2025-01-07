import React from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const PopularCard = () => {
  return (
    <div className=" w-full h-[160px] rounded-[5px] mb-[25px] flex  border-2 border-gray-300">
      {/*Image Div*/}
      <div className="w-[14%] h-full  flex items-center justify-center ">
        <img
          src="https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[120px] h-[120px] rounded-[5px] object-cover"
        />
      </div>

      {/*Info Div*/}
      <div className="flex-1 h-full px-[2rem] flex py-[1rem]">
        <div className=" flex-1 flex flex-col justify-between">
          <h1 className="text-gray-700 font-bold text-[1.4rem] text-left leading-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            et, quo dicta
          </h1>

          <div className="flex justify-between items-center w-full ">
            <div className="flex ">
              Posted by
              <img
                src="https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg"
                alt="placeholder"
                srcset=""
                className="h-[23px] mx-[12px] w-[25px] rounded-full border border-black"
              />
              Gladys Alexander
            </div>
            <span className="text-gray-400">July 15 2012 9:43 PM</span>
          </div>
        </div>
        <div className="w-[35%]  flex justify-end items-center pr-[2rem]">
          <div className=" h-full flex flex-col justify-between text-left">
            <div className="flex gap-[12px] font-semibold text-gray-600">
              <ChatBubbleOutlineOutlinedIcon /> 716 <span>Coomments</span>
            </div>
            <div className="flex gap-[12px] font-semibold text-gray-600">
              <ShareOutlinedIcon /> 354 <span>Share</span>
            </div>
            <div className="flex gap-[12px] font-semibold text-gray-600">
              <MoreHorizOutlinedIcon />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/*Last Div*/}
      <div className="w-[10%] h-full border border-gray-300">
        <div className="h-[33%] flex justify-center items-center">
          <span className="bg-[#FFF4F0] px-[20px] py-[2px] cursor-pointer">
            <ExpandLessIcon className="scale-[1.8] text-[#FF3A1E]" />
          </span>
        </div>
        <div className="h-[33%]  flex justify-center items-center">
          <span className=" px-[20px] py-[10px] text-gray-700 font-semibold text-[1.3rem]">
            50K
          </span>
        </div>
        <div className="h-[33%]  flex justify-center items-center">
          <span className="bg-[#FFF4F0] px-[20px] py-[2px] cursor-pointer">
            <KeyboardArrowDownRoundedIcon className="scale-[1.8]  text-[#FF3A1E]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
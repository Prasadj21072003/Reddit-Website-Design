import React, { memo } from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const PopularCard = memo(({ data }) => {
  return (
    <div className="cursor-pointer hover:shadow-lg hover:border-none w-full h-[115px] rounded-[5px] mb-[17px] flex  border border-gray-300">
      {/*Image Div*/}
      <div className=" w-[13%] h-full   flex items-center justify-center ">
        <img
          src={
            data?.thumbnail.slice(-3) === "jpg"
              ? data?.thumbnail
              : "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          }
          alt=""
          className="w-[90px] h-[90px] rounded-[5px] object-cover"
        />
      </div>

      {/*Info Div*/}
      <div className="flex-1 h-full px-[1.2rem] flex py-[1rem]">
        <div className=" flex-1 flex flex-col justify-between">
          <h1 className="text-gray-700 font-bold text-[1.3rem] text-left leading-tight">
            {data?.title.length > 85
              ? data?.title.slice(0, 85) + "..."
              : data.title}
          </h1>

          <div className="flex justify-between items-end w-full text-gray-600 ">
            <div className="flex items-end">
              <span>Posted by</span>
              <img
                src="https://images.unsplash.com/photo-1735835590796-7032476e7d48?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                srcSet=""
                className="h-[18px] mx-[8px] w-[18px] rounded-full "
              />
              <span>{data?.author}</span>
            </div>
            <span className="text-gray-400">July 15,2012 9:43 PM</span>
          </div>
        </div>
        <div className="w-[35%]  flex justify-end items-center pr-[2rem]">
          <div className=" h-full flex flex-col justify-between text-left">
            <div className="flex gap-[12px] font-semibold text-gray-600">
              <ChatBubbleOutlineOutlinedIcon /> {data?.num_comments}{" "}
              <span>Coomments</span>
            </div>
            <div className="flex gap-[12px] font-semibold text-gray-600">
              <ShareOutlinedIcon /> {data?.num_crossposts} <span>Share</span>
            </div>
            <div className="flex gap-[12px] font-semibold text-gray-600">
              <MoreHorizOutlinedIcon />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      {/*Last Div*/}
      <div className="w-[9%] h-full border border-gray-300 py-[7px]">
        <div className="h-[33%] flex justify-center items-center">
          <span className="bg-[#FFF4F0] px-[15px] py-[2px] cursor-pointer">
            <ExpandLessIcon className="scale-[1.8] text-[#FF3A1E]" />
          </span>
        </div>
        <div className="h-[33%]  flex justify-center items-center">
          <span className=" px-[20px] py-[10px] text-gray-700 font-semibold text-[1.3rem]">
            50K
          </span>
        </div>
        <div className="h-[33%]  flex justify-center items-center">
          <span className="bg-[#FFF4F0] px-[15px] py-[2px] cursor-pointer">
            <KeyboardArrowDownRoundedIcon className="scale-[1.8]  text-[#FF3A1E]" />
          </span>
        </div>
      </div>
    </div>
  );
});

export default PopularCard;

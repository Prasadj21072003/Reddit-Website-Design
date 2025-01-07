import React from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import DoorbellOutlinedIcon from "@mui/icons-material/DoorbellOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="flex pt-[1.7rem] pb-[0.9rem] justify-between   h-[95px] items-center">
      {/*  left section  */}
      <div className="px-[2rem] w-[17%] flex items-center gap-[2rem]  text-left">
        <WbSunnyOutlinedIcon className="text-gray-800 scale-[1.2]" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5oK-fHsFKvAHYDM9e4_CB6LNZGvKIQ3_7A&s" // Replace with your logo path
          alt="Reddit Logo"
          className="h-[35px]"
        />
      </div>

      {/*  center section  */}
      <div className="px-[0.2rem] w-[65%]">
        <div className="w-full h-16 flex items-center justify-between px-6 bg-white ">
          {/* left Section */}
          <div className="flex items-center space-x-8 font-semibold  text-[1.25rem]">
            <a
              href="#home"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <DoorbellOutlinedIcon className="mr-2 scale-[1.4] relative bottom-[2px]" />{" "}
              Home
            </a>
            <a
              href="#popular"
              className="flex items-center text-orange-500 font-semibold"
            >
              <SignalCellularAltIcon className="mr-2 scale-[1.4] relative bottom-[2px]" />{" "}
              Popular
            </a>
            <a
              href="#all"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <BarChartIcon className="mr-2  scale-[1.4] relative bottom-[2px]" />{" "}
              All
            </a>
          </div>

          {/* Center Section */}
          <div className="flex-1 mx-[60px] h-[55px] relative flex items-center">
            <input
              type="text"
              placeholder="Find community or post"
              className="w-full placeholder-gray-400 text-[1.1rem] font-semibold pl-[70px] h-full bg-[#F5F6F8]  border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-orange-500 "
            />
            <div className=" mx-[25px]  absolute scale-[1.4] text-gray-400">
              <SearchIcon />
            </div>
          </div>

          {/* Right Section */}
          <div>
            <button className="bg-orange-500 font-semibold text-[1.1rem] rounded-[10px] text-[#FFF5F1] px-[3.5rem] py-[0.9rem] hover:bg-orange-600 transition">
              Create Post
            </button>
          </div>
        </div>
      </div>

      {/*  right section  */}
      <div className="px-[2rem] w-[13%] flex items-center justify-around scale-[1.1]">
        <div className="relative b">
          <ChatBubbleOutlineOutlinedIcon className="text-gray-800" />
          <span className="w-[12px] h-[12px] bg-orange-600 rounded-full absolute left-0" />
        </div>

        <MailOutlineOutlinedIcon className="text-gray-800" />
        <div className="flex gap-[6px] items-center">
          <img
            src="https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg"
            alt="placeholder"
            srcset=""
            className="h-[33px] w-[35px] rounded-full border border-black"
          />
          <KeyboardArrowDownOutlinedIcon className="text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

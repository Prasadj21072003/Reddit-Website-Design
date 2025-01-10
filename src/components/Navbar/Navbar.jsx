import React, { memo } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import DoorbellOutlinedIcon from "@mui/icons-material/DoorbellOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import Storage from "../../storage/Storage";

const Navbar = memo(() => {
  const { navlink, setnavlink, setsearch, search } = Storage();
  return (
    <nav className=" fixed top-0 w-full z-[999] bg-white flex   justify-between pt-[0.5rem] items-center h-[70px]">
      {/*  left section  */}
      <div className="px-[2rem] w-[17%] flex items-center gap-[2rem]  text-left">
        <WbSunnyOutlinedIcon className="text-gray-800 scale-[1.2] cursor-pointer" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5oK-fHsFKvAHYDM9e4_CB6LNZGvKIQ3_7A&s"
          alt="Reddit Logo"
          className="h-[28px]"
        />
      </div>

      {/*  center section  */}
      <div className="px-[0.2rem] w-[65%]">
        <div className="w-full h-16 flex items-center justify-between px-6  ">
          {/* left Section */}
          <div className="flex items-center space-x-8 font-semibold  text-[1.25rem]">
            <a
              href="#home"
              className={`flex items-center ${
                navlink === "home"
                  ? `text-orange-500`
                  : `text-gray-600 hover:text-gray-400`
              }  transition-colors`}
              onClick={() => {
                setnavlink("home");
              }}
            >
              <DoorbellOutlinedIcon className="mr-2 scale-[1.4] relative bottom-[2px]" />{" "}
              Home
            </a>
            <a
              href="#popular"
              className={`flex items-center ${
                navlink === "popular"
                  ? `text-orange-500`
                  : `text-gray-600 hover:text-gray-400`
              } transition-colors`}
              onClick={() => {
                setnavlink("popular");
              }}
            >
              <SignalCellularAltIcon className="mr-2 scale-[1.4] relative bottom-[2px]" />{" "}
              Popular
            </a>
            <a
              href="#all"
              className={`flex items-center ${
                navlink === "all"
                  ? `text-orange-500`
                  : `text-gray-600 hover:text-gray-400`
              } transition-colors`}
              onClick={() => {
                setnavlink("all");
              }}
            >
              <BarChartIcon className="mr-2  scale-[1.4] relative bottom-[2px]" />{" "}
              All
            </a>
          </div>

          {/* Center Section */}

          <div className=" flex-1 mx-[38px] h-[42px] relative flex items-center ">
            <input
              type="text"
              placeholder="Find community or post"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              className="w-full placeholder-gray-400 text-[1.1rem] font-semibold pl-[48px] h-full bg-[#F5F6F8]  border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-orange-500 "
            />
            <div className=" mx-[17px]  absolute scale-[1.4] text-gray-400">
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
      <div className=" px-[1.5rem] w-[13%] flex items-center justify-around scale-[1.1]">
        <div className="relative cursor-pointer">
          <ChatBubbleOutlineOutlinedIcon className="text-gray-800" />
          <span className="w-[12px] h-[12px] bg-orange-600 rounded-full absolute left-0" />
        </div>

        <MailOutlineOutlinedIcon className="text-gray-800 cursor-pointer" />
        <div className="flex gap-[6px] items-center">
          <img
            src="https://images.unsplash.com/photo-1735657090869-a81c50626bd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            srcSet=""
            className="h-[25px] w-[25px] rounded-full border border-black"
          />
          <KeyboardArrowDownOutlinedIcon className="text-gray-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
});

export default Navbar;

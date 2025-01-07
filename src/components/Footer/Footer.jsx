import React from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
const Footer = () => {
  return (
    <div className="w-full h-[200px]  ">
      {/* Links */}
      <div className="w-full h-[75%] text-[0.9rem] border-t border-b border-gray-300 flex justify-between text-gray-500 font-semibold">
        <div className="w-auto h-full  text-left  flex flex-col justify-evenly">
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> About
          </span>
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Carrers
          </span>
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Press
          </span>
        </div>
        <div className="w-auto h-full  text-left  flex flex-col justify-evenly">
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Advertise
          </span>
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Help
          </span>
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Blog
          </span>
        </div>
        <div className="w-auto h-full  text-left  flex flex-col justify-evenly">
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Reddit App
          </span>
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Reddit Gold
          </span>
          <span className="flex items-center cursor-pointer">
            <FiberManualRecordRoundedIcon className="scale-[0.4]" /> Reddit Hits
          </span>
        </div>
      </div>
      {/* Privacy and Terms */}
      <div className="h-[33%] text-gray-500 font-semibold flex justify-between items-center">
        <span className="flex items-center ">
          <CopyrightRoundedIcon className="scale-[0.7]" />
          2020
        </span>
        <div className=" flex gap-[10px]">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

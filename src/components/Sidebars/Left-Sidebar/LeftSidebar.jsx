import React, { memo } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import FavoriteSection from "../../Sections/Favorites-Section/FavoriteSection";
import RedditfeedsSection from "../../Sections/RedditFeeds-Section/RedditfeedsSection";
import CommunitySection from "../../Sections/Community-Section/CommunitySection";
import Storage from "../../../storage/Storage";

const LeftSidebar = memo(() => {
  const { dropdown, setdropdown } = Storage();
  return (
    <div className=" h-auto pl-[1.5rem] pr-[2.5rem] pb-[3rem] ">
      <div className="h-full ">
        {/* Filter By Section */}
        <div className="relative">
          <div
            onClick={() => {
              setdropdown(!dropdown);
            }}
            className="h-[45px] w-full rounded-[5px] cursor-pointer border border-gray-300 bg-[#FFFFFF]  flex items-center justify-between text-[1.1rem]  text-gray-500 font-bold px-[1.2rem]"
          >
            Filter by <ExpandMoreRoundedIcon className="scale-[1.5]" />
          </div>

          <div
            className={`${
              dropdown === true ? `flex` : `hidden`
            } transition-all duration-300 ease-in-out absolute rounded-[5px] shadow-md w-full h-auto mt-[10px] z-50 bg-white  flex-col text-[1rem] font-bold text-gray-600`}
          >
            <span className="hover:shadow-sm hover:bg-[#FF6040] transition-all ease-in-out duration-100 hover:text-white py-[12px] cursor-pointer">
              FAVORITES
            </span>
            <span className="hover:shadow-sm hover:bg-[#FF6040] transition-all ease-in-out duration-100 hover:text-white  border-t border-b border-gray-300 py-[12px] cursor-pointer">
              REDDIT FEEDS
            </span>
            <span className="hover:shadow-sm hover:bg-[#FF6040] transition-all ease-in-out duration-100 hover:text-white py-[12px] cursor-pointer">
              COMMUNITY
            </span>
          </div>
        </div>
        {/* Sections */}
        <div className="h-full  ">
          <FavoriteSection />
          <RedditfeedsSection />
          <CommunitySection />
        </div>
      </div>
    </div>
  );
});

export default LeftSidebar;

import React, { memo } from "react";

const SaleSection = memo(() => {
  return (
    <div className="w-full h-full  px-[0.5rem]">
      {/* Sale Poster*/}
      <div className="w-full h-[250px] rounded-[5px] bg-white mb-[20px] border border-gray-200">
        <img
          src="https://img.freepik.com/premium-vector/summer-sale-banner_1895-855.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Reddit Poster*/}
      <div className="w-full h-[220px] rounded-[5px] bg-white border border-gray-200 flex flex-col justify-evenly items-center pt-[2rem]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5oK-fHsFKvAHYDM9e4_CB6LNZGvKIQ3_7A&s"
          alt="Reddit Logo"
          className="h-[35px] w-fit relative right-[5px]"
        />

        <span className="font-bold text-gray-700 text-[1.1rem] relative bottom-[5px]">
          Advertise on Reddit
        </span>
        <button className="px-[50px] py-[10px] border-2 border-[#FF6040] text-[#FF6040] hover:text-white hover:bg-[#FF6040] transition-all duration-200 ease-in-out font-bold ">
          GET STARTED
        </button>
      </div>
    </div>
  );
});

export default SaleSection;

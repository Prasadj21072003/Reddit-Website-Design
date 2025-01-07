import React from "react";
import Footer from "../../Footer/Footer";
import SaleSection from "../../Sections/Sale-Section/SaleSection";

const RightSidebar = () => {
  return (
    <div className=" w-full  h-[105vh] flex flex-col justify-between   px-[1rem] pb-[1rem]">
      {/* Sale Section */}
      <div className="w-full">
        <SaleSection />
      </div>
      {/* Footer */}
      <div className="w-full  ">
        <Footer />
      </div>
    </div>
  );
};

export default RightSidebar;

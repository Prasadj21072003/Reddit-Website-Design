import React, { memo } from "react";
import Footer from "../../Footer/Footer";
import SaleSection from "../../Sections/Sale-Section/SaleSection";

const RightSidebar = memo(() => {
  return (
    <div className="w-full h-[116vh] flex flex-col justify-between px-[1rem] pb-[0.9rem] ">
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
});

export default RightSidebar;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Maindiv from "../../components/Divs/Maindiv/Maindiv";

const Home = () => {
  return (
    <div className="h-full w-full overflow-x-hidden bg-[#FFFFFF]">
      {/*NavBar*/}
      <div>
        <Navbar />
      </div>
      {/*Main Content Div*/}
      <div className="h-[100vh] px-[0.8rem] bg-[#FFFFFF] ">
        <Maindiv />
      </div>
    </div>
  );
};

export default Home;

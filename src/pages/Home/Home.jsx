import React, { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MainContainer from "../../components/Containers/Main-Container/MainContainer";

const Home = memo(() => {
  return (
    <div className="h-full w-full overflow-x-hidden bg-[#FFFFFF]">
      {/*NavBar*/}
      <div>
        <Navbar />
      </div>
      {/*Main Content Div*/}
      <main className=" mt-[70px] h-[100vh] px-[0.8rem] bg-[#FFFFFF] ">
        <MainContainer />
      </main>
    </div>
  );
});

export default Home;

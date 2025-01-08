import React, { useEffect } from "react";
import PopularCard from "../../Cards/Popular-Card/PopularCard";
import Store from "../../../store/Store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getdata } from "../../../apis/ApiCalls";
const PopularDiv = () => {
  const {
    populartopic,
    setpopulartopic,
    data,
    setdata,
    community,
    search,
    currentpage,
    setcurrentpage,
    after,
    setafter,

    nextpage,
    setnextpage,
    previouspage,
    setpreviouspage,
  } = Store();

  useEffect(() => {
    getdata({
      setdata,
      populartopic,
      community,
      search,
      currentpage,
      after,
      nextpage,
      previouspage,
      setnextpage,
      setpreviouspage,
    });
  }, [populartopic, community, search, after, nextpage, previouspage]);

  const changepage = (title) => {
    if (title === "nextpage" && currentpage !== 5) {
      setnextpage(true);
      setafter(data?.after);
      let count = currentpage + 1;
      setcurrentpage(count);
    } else if (title === "previouspage" && currentpage !== 1) {
      setpreviouspage(true);
      let count = currentpage - 1;
      setcurrentpage(count);
    }
  };

  return (
    <div className="w-full h-full px-[1.3rem]  relative ">
      {/* Popular Heading With Sort */}
      <div className="flex justify-between items-center  pl-[1rem] py-[1rem] mb-[1rem]">
        <h1 className="font-semibold text-[2rem] text-gray-900">Popular</h1>
        <div className="flex gap-[2px] text-[1.3rem] font-semibold text-gray-500">
          <span
            onClick={() => {
              setpopulartopic("hot");
            }}
            className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
              populartopic === "hot" ? `bg-[#F5F6F8] text-gray-700` : ` `
            }`}
          >
            Hot
          </span>
          <span
            onClick={() => {
              setpopulartopic("new");
            }}
            className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
              populartopic === "new" ? `bg-[#F5F6F8] text-gray-700` : ` `
            }`}
          >
            New
          </span>
          <span
            onClick={() => {
              setpopulartopic("controversial");
            }}
            className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
              populartopic === "controversial"
                ? `bg-[#F5F6F8] text-gray-700`
                : ` `
            }`}
          >
            Controversial
          </span>
          <span
            onClick={() => {
              setpopulartopic("rising");
            }}
            className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
              populartopic === "rising" ? `bg-[#F5F6F8] text-gray-700` : ` `
            }`}
          >
            Rising
          </span>
          <span
            onClick={() => {
              setpopulartopic("top");
            }}
            className={`rounded-[10px] cursor-pointer  px-[1.4rem] py-[0.6rem] ${
              populartopic === "top" ? `bg-[#F5F6F8] text-gray-700` : ` `
            }`}
          >
            Top
          </span>
        </div>
      </div>

      {/* Popular Sort Results */}
      <div className=" w-full h-[95vh] mb-[45px] overflow-y-auto ">
        {data?.children?.map((item, i) => (
          <PopularCard key={i} data={item?.data} />
        ))}
      </div>

      {/*Pagination*/}
      <div className="w-full  h-[50px] relative  bottom-[20px] flex justify-end ">
        <div className="h-full w-auto   flex items-end ">
          <span
            onClick={() => changepage("previouspage")}
            className="mx-[5px] px-[5px] py-[5px] rounded-[5px] cursor-pointer text-gray-500  hover:bg-slate-200 transition-all ease-in-out duration-300   border-2 border-gray-400"
          >
            <ChevronLeftIcon className="scale-[1.4]" />
          </span>
          <span className="mx-[10px] px-[15px] py-[5px] border  rounded-[5px] text-white bg-orange-600 font-semibold text-[1.2rem]">
            {currentpage}
          </span>
          <span
            onClick={() => changepage("nextpage")}
            className="mx-[5px] px-[5px] py-[5px] rounded-[5px]  cursor-pointer text-gray-500 hover:bg-slate-200 transition-all ease-in-out duration-300  border-2 border-gray-400"
          >
            <ChevronRightIcon className="scale-[1.4]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularDiv;

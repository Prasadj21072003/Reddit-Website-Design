import React, { memo, useEffect } from "react";
import PopularCard from "../../Cards/Popular-Card/PopularCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Loader from "../../Loader/LoaderComponent";
import { makeapirequest, changepage } from "../../../utils/Paginationutils";
import Storage from "../../../storage/Storage";

const PopularContainer = memo(() => {
  const {
    populartopic,
    setpopulartopic,
    data,
    setdata,
    community,
    search,
    setsearch,
    currentpage,
    setcurrentpage,
    fetchnextdata,
    setfetchnextdata,
    nextpage,
    setnextpage,
    previouspage,
    setpreviouspage,
    loader,
    setloader,
  } = Storage();

  //handling making api request
  useEffect(() => {
    makeapirequest({
      setdata,
      populartopic,
      community,
      search,
      currentpage,
      fetchnextdata,
      nextpage,
      previouspage,
      setnextpage,
      setpreviouspage,
    });
  }, [populartopic, community, search, fetchnextdata, nextpage, previouspage]);

  //handling loading
  useEffect(() => {
    data?.length === 0 ? setloader(true) : setloader(false);
  }, []);

  return (
    <div className="w-full h-full px-[1.3rem]  relative ">
      {/* Popular Heading With Sort */}
      <div className="flex justify-between items-center  pl-[1rem] py-[1rem] mb-[1rem]">
        <h1 className="font-semibold text-[2rem] text-gray-900">Popular</h1>
        <div className="flex gap-[2px] text-[1.3rem] font-semibold text-gray-500">
          <span
            onClick={() => {
              setpopulartopic("hot");
              setsearch("");
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
              setsearch("");
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
              setsearch("");
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
              setsearch("");
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
              setsearch("");
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
      <div className=" w-full h-[100vh] ">
        {loader ? (
          <div className=" w-full h-full mb-[45px] overflow-y-auto ">
            {data?.children?.map((item, i) => (
              <PopularCard key={i} data={item?.data} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Loader />
          </div>
        )}
      </div>

      {/*Pagination*/}
      <div
        className={`w-full  h-[50px] relative  bottom-[20px] ${
          search === "" ? `flex  justify-end` : `invisible`
        }`}
      >
        {loader && (
          <div className="h-full w-auto   flex items-end ">
            <span
              onClick={() => {
                changepage({
                  data,
                  title: "previouspage",
                  currentpage,
                  setcurrentpage,
                  setnextpage,
                  setfetchnextdata,
                  setpreviouspage,
                });
              }}
              className="mx-[5px] px-[5px] py-[5px] rounded-[5px] cursor-pointer text-gray-500  hover:bg-slate-200 transition-all ease-in-out duration-300   border-2 border-gray-400"
            >
              <ChevronLeftIcon className="scale-[1.4]" />
            </span>
            <span className="mx-[10px] px-[15px] py-[5px] border  rounded-[5px] text-white bg-orange-600 font-semibold text-[1.2rem]">
              {currentpage}
            </span>
            <span
              onClick={() => {
                changepage({
                  data,
                  title: "nextpage",
                  currentpage,
                  setcurrentpage,
                  setnextpage,
                  setfetchnextdata,
                  setpreviouspage,
                });
              }}
              className="mx-[5px] px-[5px] py-[5px] rounded-[5px]  cursor-pointer text-gray-500 hover:bg-slate-200 transition-all ease-in-out duration-300  border-2 border-gray-400"
            >
              <ChevronRightIcon className="scale-[1.4]" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

export default PopularContainer;

import React, { memo } from "react";
import { changepage } from "../../utils/Paginationutils";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Storage from "../../storage/Storage";

const Pagination = memo(() => {
  const {
    data,
    search,
    currentpage,
    setcurrentpage,
    setfetchnextdata,
    setnextpage,
    setpreviouspage,
    loader,
  } = Storage();

  return (
    <div
      className={`w-full  h-[50px]   relative   ${
        search === "" ? `flex  justify-end` : `invisible`
      }`}
    >
      {loader && (
        <div className="h-full w-auto   flex items-start ">
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
            className="mx-[10px] px-[3px] py-[3.7px] rounded-[5px] cursor-pointer text-gray-500  hover:bg-slate-200 transition-all ease-in-out duration-300   border-2 border-gray-400"
          >
            <ChevronLeftIcon className="scale-[1.4]" />
          </span>
          <span
            className={`mx-[5px] px-[13px] py-[3.5px] border  rounded-[5px]  font-semibold text-[1.2rem] transition-all duration-200 ease-in-out ${
              currentpage === 1
                ? `text-white bg-orange-600`
                : `text-gray-500 bg-slate-200`
            }`}
          >
            1
          </span>
          <span
            className={`mx-[5px] px-[12px] py-[3px] border  rounded-[5px]  font-semibold text-[1.2rem] transition-all duration-200 ease-in-out ${
              currentpage === 2
                ? `text-white bg-orange-600`
                : `text-gray-500 bg-slate-200`
            }`}
          >
            2
          </span>
          <span
            className={`mx-[5px] px-[12px] py-[3px] border  rounded-[5px]  font-semibold text-[1.2rem] transition-all duration-200 ease-in-out ${
              currentpage === 3
                ? `text-white bg-orange-600`
                : `text-gray-500 bg-slate-200`
            }`}
          >
            3
          </span>
          <span
            className={`mx-[5px] px-[12px] py-[3px] border  rounded-[5px]  font-semibold text-[1.2rem] transition-all duration-200 ease-in-out ${
              currentpage === 4
                ? `text-white bg-orange-600`
                : `text-gray-500 bg-slate-200`
            }`}
          >
            4
          </span>
          <span
            className={`mx-[5px] px-[12px] py-[3px] border  rounded-[5px]  font-semibold text-[1.2rem] transition-all duration-200 ease-in-out ${
              currentpage === 5
                ? `text-white bg-orange-600`
                : `text-gray-500 bg-slate-200`
            }`}
          >
            5
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
            className="ml-[10px] px-[3px] py-[3.6px] rounded-[5px]  cursor-pointer text-gray-500 hover:bg-slate-200 transition-all ease-in-out duration-300  border-2 border-gray-400"
          >
            <ChevronRightIcon className="scale-[1.4]" />
          </span>
        </div>
      )}
    </div>
  );
});

export default Pagination;

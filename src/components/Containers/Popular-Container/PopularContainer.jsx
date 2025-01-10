import React, { memo, useEffect } from "react";

import { makeapirequest } from "../../../utils/Paginationutils";
import Storage from "../../../storage/Storage";
import Pagination from "../../Pagination/Pagination";
import PopularSort from "../../Sections/Popular-Sort/PopularSort";
import CardsSection from "../../Sections/Cards-Section/CardsSection";

const PopularContainer = memo(() => {
  const {
    populartopic,
    data,
    setdata,
    community,
    search,
    currentpage,
    fetchnextdata,
    nextpage,
    setnextpage,
    previouspage,
    setpreviouspage,
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
    <div className="w-full h-full px-[1.3rem] pb-[2.5rem]  relative ">
      {/* Popular Heading With Sort */}
      <PopularSort />

      {/* Popular Sort Results */}
      <CardsSection />

      {/*Pagination*/}
      <Pagination />
    </div>
  );
});

export default PopularContainer;

import React from "react";
import LoaderComponent from "../../Loader/LoaderComponent";
import PopularCard from "../../Cards/Popular-Card/PopularCard";
import Storage from "../../../storage/Storage";

const CardsSection = () => {
  const { data, loader } = Storage();

  return (
    <div className="w-full h-[95vh]">
      {loader ? (
        <div className=" w-full h-full  overflow-y-auto ">
          {data?.children?.map((item, i) => (
            <PopularCard key={i} data={item?.data} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderComponent />
        </div>
      )}
    </div>
  );
};

export default CardsSection;

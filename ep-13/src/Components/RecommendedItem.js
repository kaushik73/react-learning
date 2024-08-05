import React from "react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const RecommendedItem = ({
  recommendedData,
  handleOpen,
  showAccordian: isOpen,
}) => {
  const handleClick = () => {
    handleOpen();
  };
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(recommendedData));
  };
  return (
    <div className="border-b-1 border-slate-800 m-2 border-b-2 border-b-black">
      <div
        onClick={handleClick}
        className="bg-slate-300 cursor-pointer flex justify-center"
      >
        <h2 className="text-center">Name : {recommendedData?.name}</h2>
        <p className="absolute right-5 ">⬇️</p>
      </div>
      {isOpen && (
        <div className="flex justify-between items-center">
          <div className="">
            <h5>cuisines : {recommendedData?.cuisines?.join(", ")}</h5>

            <h6>{recommendedData?.areaname}</h6>
            <h6>{recommendedData?.locality}</h6>
            <h6>{recommendedData?.costForTwo}</h6>
            <h6>{recommendedData?.totalRatingsString}</h6>
          </div>
          <div>
            <button
              className="button bg-blue-300 border border-blue-800 p-2 m-2"
              onClick={handleAddItem}
            >
              Add+
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedItem;

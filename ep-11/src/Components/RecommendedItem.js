import React from "react";
import React, { useState, useEffect } from "react";

const RecommendedItem = ({
  recommendedData,
  handleOpen,
  showAccordian: isOpen,
}) => {
  const handleClick = () => {
    handleOpen();
  };
  return (
    <div className="border-b-1 border-slate-800 m-2">
      <div
        onClick={handleClick}
        className="bg-slate-300 cursor-pointer flex justify-center"
      >
        <h2 className="text-center">Name : {recommendedData?.name}</h2>
        <p className="absolute right-5 ">⬇️</p>
      </div>
      {isOpen && (
        <div className="border-b-2 border-b-black">
          <h5>cuisines : {recommendedData?.cuisines?.join(", ")}</h5>
          <h6>{recommendedData?.areaname}</h6>
          <h6>{recommendedData?.locality}</h6>
          <h6>{recommendedData?.costForTwo}</h6>
          <h6>{recommendedData?.totalRatingsString}</h6>
        </div>
      )}
    </div>
  );
};

export default RecommendedItem;

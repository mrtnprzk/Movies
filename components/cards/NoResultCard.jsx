import React from "react";
import ParizekCard from "./ParizekCard";

const NoResultCard = () => {
  return (
    <div className="w-112 bg-white text-center rounded-lg border border-gray-300 p-10 mb-16">
      <h3 className="font-bold text-6xl">No Result</h3>
      <p className="font-semibold text-4xl text-gray-400">Use search bar</p>
      <p className="font-semibold text-4xl text-gray-400">to find a movie...</p>
      <ParizekCard/>
    </div>
  );
};

export default NoResultCard;
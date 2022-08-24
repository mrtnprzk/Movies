import React from "react";
import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";

const NextPrevPage = (props) => {
  const {pageNumber, searchResult, nextPage, prevPage} = props;

  return (
    <div className="inline-flex -space-x-px my-10">
      <ButtonPrev pageNumber={pageNumber} prevPage={prevPage} />
      <p className="bg-white border border-gray-300 text-red-500 leading-tight py-2 px-3 ">
        {pageNumber}
      </p>
      <ButtonNext searchResult={searchResult} nextPage={nextPage} />
    </div>
  );
}

export default NextPrevPage
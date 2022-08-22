import React from "react";

const NextPrevPage = (props) => {

    const {pageNumber, searchResult, nextPage, prevPage} = props;

  return (
    <div className="inline-flex -space-x-px my-10">
      {pageNumber != 1 && (
        <button
          onClick={prevPage}
          className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-l-lg leading-tight py-2 px-3 w-32"
        >
          Previous Page
        </button>
      )}
      <p className="bg-white border border-gray-300 text-red-500 leading-tight py-2 px-3 ">
        {pageNumber}
      </p>
      {searchResult.length == 10 && (
        <button
          onClick={nextPage}
          className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-r-lg leading-tight py-2 px-3 w-32"
        >
          Next Page
        </button>
      )}
    </div>
  );
}

export default NextPrevPage
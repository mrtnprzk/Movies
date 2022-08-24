import React from "react";

const ButtonNext = (props) => {
  const { searchResult, nextPage } = props;
  
  return (
    <>
      {searchResult.length == 10 ? (
        <button
          onClick={nextPage}
          className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-r-lg leading-tight py-2 px-3 w-32"
        >
          Next Page
        </button>
      ) : (
        <button
          disabled
          className="border border-gray-300 text-gray-400 rounded-r-lg leading-tight py-2 px-3 w-32"
        >
          Next Page
        </button>
      )}
    </>
  );
};

export default ButtonNext;
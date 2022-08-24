import React from "react";

const ButtonPrev = (props) => {
    const { pageNumber, prevPage } = props;
    
  return (
    <>
        {pageNumber != 1 ? (
            <button
                onClick={prevPage}
                className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-l-lg leading-tight py-2 px-3 w-32"
            >
                Previous Page
            </button>
        ) : (
            <button
                disabled
                className="border border-gray-300 text-gray-400 rounded-l-lg leading-tight py-2 px-3 w-32"
            >
                Previous Page
            </button>
        )}
    </>
  );
}

export default ButtonPrev
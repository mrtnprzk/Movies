import React from "react";

const SearchBar = (props) => {

    const { searchValue, searchHandler } = props;

  return (
    <div className="flex flex-col items-center p-10 my-4">
      <h1 className="text-7xl font-bold text-center max-w-lg">
        Search for Your <span className="text-red-600">Favourite Movie</span>!
      </h1>
      <div>
        <input
          name="search"
          type="search"
          className="w-56 text-xl p-4 mt-8 pl-8 border text-center border-gray-300 placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-red-500 focus:border-red-500"
          placeholder="Let's Find It!"
          value={searchValue}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}

export default SearchBar
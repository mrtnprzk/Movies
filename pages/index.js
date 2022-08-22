import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/cards/MovieCard";
import ParizekCard from "../components/cards/ParizekCard";
import NextPrevPage from "../components/elements/NextPrevPage";
import SearchBar from "../components/elements/SearchBar";

export default function Home() {

   const [searchResult, setSearchResults] = useState(null);
   const [searchValue, setSearchValue] = useState("");
   const [pageNumber, setPageNumber] = useState(1);

   const urlSearch = `http://www.omdbapi.com/?apikey=9e8f472a&s=${searchValue}&page=${pageNumber}`;

   //fetching data for search
   const fetchDataSearch = async () => {
     const resp = await fetch(urlSearch);
     const result = await resp.json();
     result && setSearchResults(result.Search);
   };

   useEffect(() => {
     const timer = setTimeout(() => {
       fetchDataSearch();
     }, 300);

     return () => {
       clearTimeout(timer);
     };
   }, [searchValue, pageNumber]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value), 
    setPageNumber(1);
  }

  const nextPage = () => {
    setPageNumber((prevNum) => prevNum + 1);
    window.scrollTo({ top: 0 });
  };

   const prevPage = () => {
     setPageNumber((prevNum) => prevNum - 1);
     window.scrollTo({ top: 0 });
   };

  return (
    <div className="flex flex-col justify-center items-center">
      <SearchBar searchValue={searchValue} searchHandler={searchHandler} />
      {searchResult ? (
        <>
          <MovieCard searchResult={searchResult} />
          <NextPrevPage
            searchResult={searchResult}
            pageNumber={pageNumber}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      ) : (
        <ParizekCard />
      )}
    </div>
  );
}

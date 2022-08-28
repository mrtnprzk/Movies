import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/cards/MovieCard";
import NoResultCard from "../components/cards/NoResultCard";
import NextPrevPage from "../components/elements/NextPrevPage";
import SearchBar from "../components/elements/SearchBar";
import Spinner from "../components/elements/Spinner";

export default function Home() {

  const [searchResult, setSearchResults] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

  const urlSearch = `https://www.omdbapi.com/?apikey=9e8f472a&s=${searchValue}&page=${pageNumber}`;

  const fetchDataSearch = async () => {
    try {
      const resp = await fetch(urlSearch);
      const result = await resp.json();
      result && setSearchResults(result.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
      fetchDataSearch();
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, pageNumber]);

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
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
  
      {isLoading ? (
        <Spinner />
      ) : searchResult ? (
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
        <NoResultCard />
      )}

    </div>
  );
}

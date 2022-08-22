import React from "react";
import Link from "next/link";

export const MovieCard = (props) => {

    const { searchResult } = props;
    const noImage = "/images/no-image.jpg";

  return (
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {searchResult.map((result) => (
          <div
            key={result.imdbID}
            className="flex flex-col max-w-sm rounded-xl overflow-hidden bg-white border border-gray-300 m-4 shadow-md duration-200 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={result.Poster != "N/A" ? result.Poster : noImage}
              alt={result.Title}
              className="w-full h-128"
            />

            <div className="text-center mx-auto my-auto p-4">
              <h2 className="text-2xl font-bold mb-4">
                {result.Title} ({result.Year})
              </h2>
              <Link href={`/${result.imdbID}`}>
                <button
                  className={`px-5 rounded-full py-2 border border-black hover:bg-red-600 hover:text-white hover:shadow-md duration-500`}
                >
                  Detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
}
 
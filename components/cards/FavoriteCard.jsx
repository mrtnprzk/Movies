import React from "react";
import Link from "next/link";

const FavoriteCard = (props) => {
    const { Title, Country, Genre, Poster, Year, Runtime, imdbID, imdbRating } = props.movie;
    const noImage = "/images/no-image.jpg";

  return (
    <div className="flex w-96 md:w-112 rounded-md space-x-5 bg-white border border-gray-300 shadow-md p-4 m-2">
      <img
        className="rounded w-30 h-40 my-auto"
        src={Poster != "N/A" ? Poster : noImage}
        alt={Title}
      />

      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex justify-between items-start w-full">
            <div>
              <h2 className="text-lg font-semibold">{Title}</h2>
            </div>
            <div className="flex items-center pl-2 mt-0.5">
              <p className="mr-0.5 text- font-bold text-gray-900">
                {imdbRating}
                <span className="text-gray-400">/10</span>
              </p>
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 22 22"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>

          <div className="text-gray-500">
            <p className="text-sm">{Genre}</p>
            <p className="text-xs">
              {Country}, {Year}, {Runtime}
            </p>
          </div>
        </div>

        <div className="text-center mt-2 space-x-3">
          <Link href={`/${imdbID}`}>
            <a className="px-5 rounded-full py-2 border border-black hover:bg-red-500 hover:text-white duration-300">
              Detail
            </a>
          </Link>
          <button
            onClick={() => props.deleteHanlder(imdbID)}
            className="px-5 rounded-full py-2 border border-black bg-black text-white hover:scale-105 duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard